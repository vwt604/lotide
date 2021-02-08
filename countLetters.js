// TEST/ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} ==! ${expected}`);
  }
};

//THE FUNCTION: returns a report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.
// allItems: an array of strings that we need to look through
// lettersToCount: an object specifying what to count

const countLetters = function(string, lettersToCount) {
  const results = {};
  for (const letter of string) {
    if (lettersToCount[letter]) { //letersToCount = const allTheLetters; letter = key (a,b,c,..)
     console.log('this is lettersToCount',lettersToCount);
      console.log('this is letter',letter);
      if (results[letter]) {
        console.log('this is results', results)
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }ef
    }
  }
  return results;
};

const allTheLetters = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
  e: 1,
  f: 1,
  g: 1,
  h: 1,
  i: 1,
  j: 1,
  k: 1,
  l: 1,
  m: 1,
  n: 1,
  o: 1,
  p: 1,
  q: 1,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 1,
  w: 1,
  x: 1,
  y: 1,
  z: 1,
};


//TEST CASE

const result1 = countLetters("lighthouse labs in the house", allTheLetters);

assertEqual(result1["l"], 2);
assertEqual(result1["i"], 1);
assertEqual(result1["v"], 1);
