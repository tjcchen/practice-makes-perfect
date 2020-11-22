(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    reject('FAILED');
  });

  // If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1
  const promise2 = promise1.then(() => {
    console.log('promise1 fulfilled');
  }, false);

  // print out 'promise2 rejected: FAILED'
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    reason => {
      console.log('promise2 rejected: ' + reason);
    }
  );
})();