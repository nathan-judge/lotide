const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
    }
};

var eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return "🛑🛑🛑 These arrays do not match";
    }

    for (var i = 0; i <= array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return "🛑🛑🛑 These arrays do not match";

        } else {
            return "✅✅✅ These arrays match";
        }
    }
};


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

