const assertEqual = require('./assertEqual');


const tail = function(arr1) {
  let tailedArray = arr1.slice(1);
  return tailedArray;
};

module.exports = tail; 