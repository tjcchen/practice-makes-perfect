function add(...args) {
  let sum = 0;

  function helper(...arguments) {
    args = args.concat(arguments);

    sum = args.reduce((accum, curr) => {
      return accum + curr;
    });

    return helper;
  }

  helper.toString = function() {
    return sum;
  };

  return helper;
}

const sum = +add(1)(2, 3)(4, 5, 6)(7)(8)(9, 10);
console.log(sum); // 55
