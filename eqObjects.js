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


//TEST CASE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc))
