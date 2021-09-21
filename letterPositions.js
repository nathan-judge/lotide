const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
    const result = eqArrays(array1, array2);
    if (result) {
        console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
    }
};





const letterPositions = function (words) {
    const results = {};
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== ' ') {
            if (results[words[i]]) {
                results[words[i]].push(i);
            } else {
                results[words[i]] = [i];
            }
        }
    }
    return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);