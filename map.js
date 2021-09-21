const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
    const result = eqArrays(array1, array2);
    if (result) {
        console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
    }
};




const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));

    }
    return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const names = ["bob", "john", "alex"]


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(names, name => name.length);
console.log(results1);

const results3 = map(names, name => name.length + 1);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])
assertArraysEqual(results2, [3, 4, 4])
assertArraysEqual(results3, [4, 5, 5])
