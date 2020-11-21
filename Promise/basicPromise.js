;(function() {
  'use strict';

  const promise = new Promise((resolve, reject) => {
    let a = 1 + 1;

    if (a === 3) {
      resolve('SUCCESS: equals');
    } else {
      reject('FAILED: not equal');
    }
  });

  // promise.then(onFulfilled, onRejected);
  // 1. onFulfilled callback contains the value of fulfilled as its first parameter
  // 2. onRejected callback contains the reason of rejected as its first parameter
  // 3. onFulfilled and onRejected will be ignored if their promise.then's parameter isn't a function
  promise.then(value => {
            // console.log(this); // undefined

            console.log('[first then]: ' );
            console.log(value);
          }, reason =>
          {
            console.log('[first then]: ');
            console.log(reason);
          })
          .then(value => {
            console.log('[second then]: ');
            console.log(value); // undefined
          }, reason => {
            console.log('[second then]: ');
            console.log(reason); // undefined
          })
          .then(value => {
            console.log('[third then]: ');
            console.log(value); // undefined
          }, reason => {
            console.log('[third then]: ');
            console.log(reason); // undefined
          });
})();