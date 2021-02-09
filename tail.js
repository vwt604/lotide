const assertEqual = require('./assertEqual');

//FUNCTION: returns the "tail" of an array: everything except for the first item (head) of the provided array

const tail = function(arr1) {
  let tailedArray = arr1.slice(1);
  return tailedArray;
};

module.exports = tail; 