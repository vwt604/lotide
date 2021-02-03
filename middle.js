// TEST/ASSERTION FUNCTIONS

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

//ACTUAL FUNCTION which will take in an array and return the middle-most element(s) of the given array. Return empty array if no middle

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

// TEST CODE
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [3]);
