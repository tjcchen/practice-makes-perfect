/**
 * Definition of moduleD
 * 
 * Eg: syntax of module with dependencies
 * 
 * define('moduleName', ['dependencyName'], function(dependencyName) {
 *  console.log(dependencyName);
 * });
 * 
 */

define('moduleD', ['moduleB'], function(moduleB) {
  return 'moduleD timestamp: ' + moduleB;
});
