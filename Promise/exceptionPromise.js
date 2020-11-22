(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  // If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason
  const promise2 = promise1.then(() => {
    throw new Error('Error');
  }, null);

  // print out 'promise2 rejected'
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    () => {
      console.log('promise2 rejected');
    }
  );
})();