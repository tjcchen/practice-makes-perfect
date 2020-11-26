function add(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

function plusOne(c) {
  return c + 1;
}

const composite = (...args) => {
  return (...arguments) => {
    const init = args[0].apply(null, arguments);

    // start from the second function
    // [1, 2, 3].slice(1) => [2, 3]
    return args.slice(1).reduce((accum, curr) => {
      return curr(accum);
    }, init);
  };
}

const addSquareAndPlusOne = composite(add, square, plusOne);

const result = addSquareAndPlusOne(1, 2);
console.log(result); // 10 = (1 + 2) * 3 + 1