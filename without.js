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


const without = function(array1, excludedValues) {
  for (let a = 0; a < excludedValues.length; a++) {

    for (let b = 0; b < array1.length; b++) {

      if (array1[b] === excludedValues[a]) {
        array1.splice(b,1);
      }
    }
  }
  return array1;
};

//tests

console.log(without([1, 2, 3], [1])); //[ 2, 3 ]
console.log(without(["1", "2", "3"], [1, 2, "3"])); //[ '1', '2' ]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



