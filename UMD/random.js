/**
 * A basic module definition of UMD(Universal Module Definition)
 * 
 * @author Andy Chen
 * @location Shenzhen Book Store, Futian District, Shenzhen City
 */

;(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('random', factory); // AMD
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(); // CJS
  } else {
    root.random = factory(); // mount to global object
  }
})(this, function() {
  'use strict';

  return function() {
    return Math.random();
  };
});
