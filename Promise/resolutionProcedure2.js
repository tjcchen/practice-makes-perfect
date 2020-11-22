;(function() {
  'use strict';

  ///////////////////
  // Case 1: resolve
  ///////////////////
  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  // If x is a promise, promise2 adopt its state
  // If/when x is fulfilled, fulfill promise with the same value
  const promise2 = promise1.then(
    () => {
      return promise1;
    },
    null
  );
  
  // print out 'promise2 fulfilled'
  promise2.then(
    () => {
      console.log('promise2 fulfilled');
    },
    () => {
      console.log('promise2 rejected');
    }
  );

  //////////////////
  // Case 2: reject
  //////////////////
  const promise3 = new Promise((resolve, reject) => {
    reject();
  });

  // If x is a promise, promise4 adopt its state
  // If/when x is rejected, reject promise with the same reason
  const promise4 = promise3.then(
    null,
    () => {
      return promise3;
    }
  );
  
  // print out 'promise4 rejected'
  promise4.then(
    () => {
      console.log('promise4 fulfilled');
    },
    () => {
      console.log('promise4 rejected');
    }
  );

  ///////////////////
  // Case 3: pending
  ///////////////////
  const promise5 = new Promise((resolve, reject) => {
    resolve();
  });
  
  // If x is a promise, promise6 adopt its state
  // If x is pending, promise must remain pending until x is fulfilled or rejected
  const promise6 = promise5.then(
    () => {
      // note new Promise(); will cast error, therefore 'promise6 rejected' will be executed
      return new Promise(() => {});
    },
    null
  );
    
  console.log(promise6); // Promise { <pending> }
  
  // print out nothing, promise6 in pending state
  promise6.then(
    () => {
      console.log('promise6 fulfilled');
    },
    () => {
      console.log('promise6 rejected');
    }
  );
})();