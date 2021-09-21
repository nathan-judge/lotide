const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
    const result = eqArrays(array1, array2);
    if (result) {
        console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
    }
};

module.exports = assertArraysEqual;