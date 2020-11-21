;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    reject();
  });

  // console.log(promise1); // Promise { <rejected> undefined }

  const promise2 = promise1.then(null, function() {
    console.log('123');
    return 123;
  });

  // console.log(promise2); // Promise { <pending> }

  // print out 'promise2 fulfilled'
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    () => {
      console.log('promise2 rejected');
    });
})();