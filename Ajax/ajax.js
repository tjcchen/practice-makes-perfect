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

  const getJson = () => {
    return 'retrieve json data from server';
  };

  return {
    getJson
  };
});