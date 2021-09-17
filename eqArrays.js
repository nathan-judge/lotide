const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
    }
};
// make a if stat b4 for loop if array1 is bigger than array2 
const eqArrays = function (array1, array2) {
    if (array1.length > array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
    } if (array1.length < array2.length) {
        for (let i = 0; i < array2.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

    }
    return true;
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//onsole.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["2", 3, 4], ["2", 3, 4, 5, 6, 7]));
console.log(assertEqual(eqArrays))
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => falsemmm


