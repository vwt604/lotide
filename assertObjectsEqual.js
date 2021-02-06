//FUNCTION:  takes in two arrays and returns true or false, based on a perfect match.
// const eqArrays = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

//FUNCTION: takes in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {      // function taking in two objects
  let array1 = Object.keys(object1);                //array of object1 keys
  let array2 = Object.keys(object2);               //array of object2 keys

  if (array1.length !== array2.length) {           //checks length match
    return false;
  
  } else {
    for (let element of array1) {                   //loops through elements of array1 if array lengths match
      if (object1[element] !== object2[element]) { //checks element match
        return false;
      }
    }
  }
  return true;                                    //return true if all match
};


const assertObjectsEqual = function(actual, expected) {     //function takes in actual and expected objects to compare
  const inspect = require('util').inspect;                  //inspect function
  if (eqObjects(actual, expected) === true) {
   return console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`); //print pass if objects have perfect match
  } else {
   return console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`); //print fail if not
  }
};



//TEST CASE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false


