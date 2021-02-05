//TEST ASSERTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} ==! ${expected}`);
  }
};

//THE FUNCTION: takes in an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) { //Object.keys returns an array of keys. Because we are scanning an array, we use for..of instead of for..in
    if (object[key] === value) {
      return key;
    }
  }
};

//METHOD 2: Using let...in

const findKeyByValueTwo = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key;
    }
  }
  return undefined; //or leave blank
};


//TESTS

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");