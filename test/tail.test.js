const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail   = require('../tail');


//TEST CODE

describe("#tail", () => { 
  it('returns 2 as the length', () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2);
  });

});