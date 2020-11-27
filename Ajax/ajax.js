;(function(root, factory) {
  'use strict';
  
  //--------------------------------------------------------------------------------------------------------------------------
  // The Asynchronous Module Definition (AMD) format is used in browsers and uses a define function to define modules
  // The CommonJS (CJS) format is used in Node.js and uses require and module.exports to define dependencies and modules
  // The ES Module (ESM) format. It uses an export keyword to export a module’s public API and an import keyword to import it.
  // The Universal Module Definition (UMD) format can be used both in the browser and in Node.js.
  // UMD is useful when a module needs to be imported by a number of different module loaders.
  //--------------------------------------------------------------------------------------------------------------------------
  
  if (typeof define === 'function' && define.amd) { // amd(requirejs) - define, requirejs
    define('ajax', factory);
  } else if (typeof exports === 'object') { // cjs(node) - module.exports, require
    exports = module.exports = factory();
  } else { // default - mount ajax to window
    root.ajax = factory();
  }

})(this, function() {
  'use strict';

  const GET                = 'GET';
  const POST               = 'POST';
  const CONTENT_TYPE       = 'Content-Type';
  const URL_ENCODED_STRING = 'application/x-www-form-urlencoded';
  const DONE               = 200;
  const NOT_MODIFIED       = 304;
  const READY              = 4;

  let isAsync             = true;
  let xhr                 = null;

  const init = () => {
    return XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
  };

  // initialize xhr object
  xhr = init();

  const get = (options = {}) => {
    xhr.open(GET, options.url, isAsync);

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== READY) {
          return;
        }

        if (xhr.status === DONE || xhr.status === NOT_MODIFIED) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.responseText));
        }
      };
  
      xhr.send();
    });
  };

  const post = (options = {}) => {
    xhr.open(POST, options.url, isAsync);
    xhr.setRequestHeader(CONTENT_TYPE, URL_ENCODED_STRING);

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== READY) {
          return;
        }

        if (xhr.status === DONE) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.responseText));
        }
      };

      xhr.send(options.data);
    });
  };

  return {
    get,
    post
  };
});