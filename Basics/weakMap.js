;(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('WeakMap', factory);
  } else if (typeof exports === 'object') {
    exports = module.exports = factory();
  } else {
    root.WeakMap = factory();
  }
})(this, function() {
  'use strict';

  const privates = new WeakMap();

  function Public() {
    const me = {
      name: 'Kobe'
    };
    privates.set(this, me);
  }

  Public.prototype.method = function() {
    const me = privates.get(this);
    // do stuff with private data in me

    return me.name;
  };

  return Public;
});