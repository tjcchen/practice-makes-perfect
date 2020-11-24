;(function() {
  'use strict';

  const promise1 = new Promise((resolve) => setTimeout(resolve, 1000));
  const promise2 = Promise.reject(100);

  // Promise.allSettled will executed fulfilled callback when all promises finished, no matter fulfilled or rejected
  // In this case, print out 'Promise.all fulfilled'
  Promise.allSettled([promise1, promise2])
         .then(
           () => {
             console.log('Promise.all fulfilled');
           }
         ).catch(
           () => {
             console.log('Promise.all rejected');
           }
         );
})();