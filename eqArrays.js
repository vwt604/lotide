//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays; 




