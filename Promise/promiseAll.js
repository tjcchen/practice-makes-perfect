;(function() {
  'use strict';

  const promise1 = new Promise(resolve => setTimeout(resolve, 3000));

  const promise2 = Promise.resolve(200);
  const promise3 = Promise.reject(100);

  Promise.all([promise1, promise2, promise3])
         .then(
           msgs => {
             // print out: Promise.all fulfilled
             console.log('Promise.all fulfilled');

             console.log(msgs); // [ undefined, 200 ]
           }
         )
         .catch(
           msg => {
             // when there is a rejected promise, Promise.all will execute this part of logic
             console.log('Promise.all rejected');
             console.log(msg); // 100
           }
         );
})();