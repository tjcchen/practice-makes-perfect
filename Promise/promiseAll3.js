;(function() {
  'use strict';

  const promise1 = new Promise((resolve) => setTimeout(resolve, 1000));
  const promise2 = Promise.reject(100);

  // promise only remember current promise status
  // this workaround used to solve due to promise2 rejected, Promise.all cannot be executed properly problem
  Promise.all([promise1.catch(() => { 'failed' }), promise2.catch(() => { 'failed' })])
         .then(
           (msgs) => {
             console.log('Promise.all fulfilled');
             console.log(msgs); // [ undefined, undefined ]
           }
         ).catch(
           () => {
             console.log('Promise.all rejected');
           }
         );
})();