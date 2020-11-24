;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    reject('Outer Error');
  });

  // If x is an object or function,
  // when retrieving the property x.then results in a thrown exception e, reject promise with e as the reason
  const promise2 = promise1.then(
    null,
    () => {
      return {
        get then() {
          // some code logic
          // ...

          throw new Error('Inner Error');

          // ...
        }
      }
    }
  );
  
  // promise2 rejected: Error: Inner Error
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    reason => {
      console.log('promise2 rejected: ' + reason);
    }
  );
})();