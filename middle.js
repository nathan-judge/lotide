const assertArraysEqual = function (array1, array2) {
    const result = eqArrays(array1, array2);
    if (result) {
        console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
    }
};

const eqArrays = function (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const middle = function (array) {
    let result = ''

    let newlength = array[Math.floor(array.length / 2)];
    if (array.length < 3) {
        return []
    }
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {

            result = array[newlength - 1] + ', ' + array[newlength]


        } else {

            result = array[Math.floor(array.length / 2)];

        }

    }
    return result
}


console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3]


middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]