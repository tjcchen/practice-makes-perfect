;(function() {
  'use strict';

  const promise1 = new Promise((resolve) => setTimeout(resolve, 1000));
  const promise2 = Promise.reject(100);

  // promise only remember current promise status
  // this workaround used to solve due to promise2 rejected, Promise.all cannot be executed properly problem
  Promise.all([
    promise1.catch(() => { return 'promise1 failed'; }),
    promise2.catch(() => { return 'promise2 failed'; })
  ])
  .then(
    (msgs) => {
      console.log('Promise.all fulfilled');
      console.log(msgs); // [ undefined, 'promise2 failed' ]
    }
  ).catch(
    () => {
      console.log('Promise.all rejected');
    }
  );
})();