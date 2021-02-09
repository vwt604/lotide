const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [ 3 ]);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [ 3, 4 ]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [ ]);
  });


});

