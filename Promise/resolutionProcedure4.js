;(function() {
  'use strict';

  const promise1 = new Promise((resolve, reject) => {
    reject('Error');
  });

  // if x is an object or function, let then be x.then
  const promise2 = promise1.then(
    null,
    () => {
      return {
        flag: false
      };
    }
  );

  const promise3 = promise1.then(
    null,
    () => {
      return function() {
        return 123;
      };
    }
  );
  
  // print out 'promise2 resolved: false'
  promise2.then(
    (obj) => {
      console.log('promise2 resolved: ' + obj.flag);
    },
    () => {
      console.log('promise2 rejected');
    }
  );

  // print out 'promise3 resolved: function() { return 123; }'
  // looks doing nothing, just return the function
  promise3.then(
    (val) => {
      console.log('promise3 resolved: ' + val);
    },
    () => {
      console.log('promise3 rejected');
    }
  );
})();