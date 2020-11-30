/**
 * AMD use case of ramdom.js UMD module
 * 
 * This part of code logic will be executed in browser environment
 */

require(['random'], function(random) {
  console.log(random());
});