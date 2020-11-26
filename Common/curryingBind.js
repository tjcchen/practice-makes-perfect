function add(x, y) {
  return x + y;
}

let addByTwo = add.bind(this, 2);
let result1  = addByTwo(3);
console.log(result1); // 2 + 3 = 5

let addByThree = add.bind(this, 3, 3);
let result2    = addByThree(1);
console.log(result2); // 3 + 3 = 6, 1 will be ignored