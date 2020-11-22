;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    reject(123);
  });

  // If x is not an object or function, fulfill promise with x
  const promise2 = promise1.then(
    null,
    () => {
      return true;
    }
  );
  
  // print out 'promise2 fulfilled: true'
  promise2.then(
    (val) => {
      console.log('promise2 fulfilled: ' + val); // val = true
    },
    () => {
      console.log('promise2 rejected');
    }
  );
})();