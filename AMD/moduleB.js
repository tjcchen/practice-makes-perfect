/**
 * Definition of moduleB, requirejs will find this module by file name
 */

define(function() {
  const getTime = new Date().getTime();

  return getTime;
});