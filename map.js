//ASSERTION TEST

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

//THE FUNCTION: returns new array with the first letter of each word in the given array

const map = function(array, callback) { //takes in an array and callback 
  const results = [];
  for (let item of array) {   //for every item in array, 
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const mapResults = map(words, word => word[0]);     //returns array of first letters


//TEST CASE

assertArraysEqual(mapResults, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(mapResults[1], ['c']);

npm run 0 