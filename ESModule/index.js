import './moduleA.js';
import moduleB from './moduleB.js';
import moduleC from './moduleC.js';
import { message } from './moduleC.js';                  // message is an export named 'message'
import { message as customMessage } from './moduleC.js'; // rename message to customMessage

// import { text } from './moduleC.js'; // Cast Error, the requested module './moduleC.js' does not provide an export named 'text'

console.log(moduleB);       // 1606814150132
console.log(moduleC.text);  // Hello ESModule!, retrieve text property from default export object
console.log(message);       // ESModule
console.log(customMessage); // ESModule

