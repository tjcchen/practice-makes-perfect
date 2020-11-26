function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

const result = add(1)(2)(3);
console.log(result);