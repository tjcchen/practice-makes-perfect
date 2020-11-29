/**
 * Entry point JS file of the whole application
 */

require(['moduleA', 'moduleB', './moduleC'], function(moduleA, moduleB, moduleC) {
  console.log(moduleB);

  console.log(moduleC);
});