// TEST/ASSERTION

const assertArraysEqual = require('./assertArraysEqual');


//FUNCTION: takes in an array and return the middle-most element(s) of the given array. Return empty array if no middle

const middle = function(array) {
  let middleIndex = array[Math.floor((array.length - 1) / 2)];
  let emptyArray = [];
  let start = middleIndex - 1;
  let end = middleIndex + 1;
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return array.slice(start, end);
  } else {
    return [middleIndex];
  }
};


module.exports = middle; 