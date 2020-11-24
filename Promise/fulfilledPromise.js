;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    resolve('SUCCESS');
  });

  // If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1
  const promise2 = promise1.then(
    null,
    () => {
      console.log('promise1 rejected'); // will not be executed
    }
  );

  // print out 'promise2 fulfilled: SUCCESS'
  promise2.then(
    value => {
      console.log('promise2 fulfilled: ' + value);
    },
    () => {
      console.log('promise2 rejected');
    }
  );
})();