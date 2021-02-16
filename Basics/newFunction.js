/**
 * Retrieve global this object with new Function
 */

'use strict';

// 1. simple usage
// The last argument to Function is the function body as a string, and the previous arguments represent different arguments to the function.
let calculateSalary = new Function('users', 'salary', 'return users * salary');

let salary = calculateSalary(2, 100);
console.log(salary); // 200

// 2. a good way to get the global
// IIFE
(function(win) {

  // Do something with the global
  console.log(win);

})(Function('return this')());
