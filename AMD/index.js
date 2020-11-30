/**
 * Entry point JS file of the whole application
 */

require(['moduleA', 'moduleB', './moduleC', 'moduleD'], function(moduleA, moduleB, moduleC, moduleD) {
  console.log(moduleB);
  console.log(moduleC);
  console.log(moduleD);
});