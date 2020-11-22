;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  // If promise and x refer to the same object, reject promise with a TypeError as the reason
  const promise2 = promise1.then(
    () => {
      return promise2;
    },
    null
  );
  
  // print out 'promise2 rejected'
  // TypeError: Chaining cycle detected for promise #<Promise>
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    reason => {
      console.log('promise2 rejected');
      console.log(reason);
    }
  );
})();