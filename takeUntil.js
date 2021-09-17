const assertArraysEqual = function (array1, array2) {
    const result = eqArrays(array1, array2);
    if (result) {
        console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
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

const takeUntil = function (array, callback) {
    const results = [];

    for (let item of array) {
        if (callback(item)) {
            break;
        }
        console.log(item)
        // results.push(callback(item));
        results.push(item)

    }
    return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2])