function add(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

function plusOne(a) {
  return a + 1;
}

const composite = (...args) => {
  return (...arguments) => {
    return args.reduce((accum, curr) => {
      return curr(typeof accum === 'function' ? accum.apply(accum, arguments) : accum);
    });
  };
}

const addSquareAndPlusOne = composite(add, square, plusOne);

console.log(addSquareAndPlusOne(1, 2)); // 10