/**
 * Definition of moduleA, requirejs will find this module by file name
 */

define(function(require) {
  // require moduleB inside moduleA
  const moduleB = require('moduleB');

  setTimeout(() => console.log(moduleB), 1000);
});