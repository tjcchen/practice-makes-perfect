function fixedCurrying(fn, totalArgs) {
  // fn.length returns the number of its arguments
  totalArgs = totalArgs || fn.length;

  return function recursor() {
    // fire fn with all the arguments at the last time, return recursor function in previous times
    // the following line of code equals to resursor.bind(this, 1).bind(this, 2, 3).bind(this, 4)

    return arguments.length < totalArgs ? recursor.bind(this, ...arguments) : fn.call(this, ...arguments);
  };
}

const add = fixedCurrying((a, b, c) => (a + b + c));
console.log(add(1)(2)(3)); // 6
console.log(add(1)(2, 3)); // 6
console.log(add(1, 3)(2)); // 6

// console.log(add(1)(2)(3)(4)); // Cast Error

const multiply = fixedCurrying((a, b, c, d) => (a * b * c * d));
console.log(multiply(1)(2)(3)(4)); // 24
console.log(multiply(1)(2, 3)(4)); // 24
console.log(multiply(1)(2, 3, 4)); // 24