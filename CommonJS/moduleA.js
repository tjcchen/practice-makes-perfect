const moduleB = require('./moduleB');

// print out timestamp coming from moduleB with 1s delay
// execute passed-in function first, then print out result 1s later
setTimeout(() => console.log(moduleB), 1000);