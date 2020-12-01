require('./moduleA'); // print out timestamp coming from moduleA, 1606640540696
const moduleB               = require('./moduleB');
const { text }              = require('./moduleC'); // destructure text from moduleC
const { text: anotherText } = require('./moduleC'); // rename text to anotherText

console.log(moduleB);     // print out timestamp coming from moduleB, 1606640540696
console.log(text);        // Hello CommonJS!
console.log(anotherText); // Hello CommonJS!