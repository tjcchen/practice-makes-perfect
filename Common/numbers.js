/**
 * This module used to resolve JS float number defects
 */

// 1. Displaying a float number with toPrecision
// Eg: 1.5000000000000001 => 1.5
// Note: The unary plus operator '+' converts its operand to Number type.
// parseFloat(1.5000000000000001.toPrecision(12)) === 1.5  // true
const strip = (number, precision = 12) => {
  return +parseFloat(number.toPrecision(precision));
};

const result1 = strip(1.50000000000000000001);
console.log(result1);


// 2. Handle basic operations(sum, difference, product, quotient) more accurately
// solution: convert decimals to integers first, then execute basic operations
const sum = (num1, num2) => {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;

  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
};

const result2 = sum(1.3332, 3.5542565); // 4.8874565
console.log(result2);