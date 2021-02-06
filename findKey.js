//TEST ASSERTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} ==! ${expected}`);
  }
};

//FUNCTION: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (let key in object) {                   //scans keys in object
    if (callback(object[key])) {              //if callback key matches object key
      return key;                             //return key
    }
  }
};


// TEST CODE


assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), 'noma');


