;(function() {
  'use strict';

  const promise = new Promise((resolve, reject) => {
    let a = 1 + 1;

    if (a === 2) {
      resolve('SUCCESS: equals');
    } else {
      reject('FAILED: not equal');
    }
  });

  // then(resolveCallback, rejectCallback);
  // callbacks contain value of fulfilled, or reason of rejected
  promise.then(value =>
  {
    console.log(value);
  }, reason =>
  {
    console.log(reason);
  });
})();