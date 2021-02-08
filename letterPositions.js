//TEST/ASSERTION FUNCTIONS

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

//THE FUNCTION: produces an object. returns all the indices (zero-based positions) in the string where each character is found

const letterPositions = function(sentence) { //function runs through a sentence
  let results = {}; //produces an object
  for (let i = 0; i < sentence.length; i++) { //loops through sentence x times
    if (results[sentence[i]] && sentence[i]!== " ") { 
      results[sentence[i]].push(i);
    } else if (sentence[i]!== " ") {
      results[sentence[i]] = [i];
    }
  }
  console.log('THIS IS THE RESULT:', results)
  return results;
};

console.log(letterPositions("hello there"));

//TEST CASE


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("goodbye now").o, [1,2]);
