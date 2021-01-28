/**
 * Version Comparison V1
 * 
 * In version 1, we only take care of three-digit version comparison.
 * For other senarios, we'll tackle them in later versions.
 * 
 * Valid version numbers look like this: v1: 1.1.3  v2: 2.3.4
 */

'use strict';

/**
 * Returns the larger version of two version numbers
 * 
 * @param {String} version1 version number 1
 * @param {String} version2 version number 2
 */
const compareVersion = (version1, version2) => {
  let regExp = /^(\d+\.){1}(\d+\.){1}(\d+){1}$/;

  if (!regExp.test(version1) || !regExp.test(version2)) {
    throw new Error('Invalid version numbers, please check them! A valid version number format like this: 1.1.3');
  }

  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  let len  = arr1.length;

  for (let i = 0; i < len; i++) {
    // convert string to number with `+` operator
    let num1 = +arr1[i];
    let num2 = +arr2[i];

    if (num1 > num2) {
      return version1;
    } else if (num2 > num1) {
      return version2;
    }
  }

  // When code executes to this part, we assume that two version numbers are the same.
  // Thus, return either version number is sufficient to complete the task
  return version1;
};

//----------------
// Test Section
//----------------
let largerVersion = compareVersion('1.1.3', '2.3.4');
console.log(largerVersion);