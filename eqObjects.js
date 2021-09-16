const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
    }
};

const eqArrays = function (array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};
const eqObjects = function (object1, object2) {
    const Keys1 = Object.keys(object1);
    const Keys2 = Object.keys(object2);
    if (Keys1.length !== Keys2.length) {
        return false;
    } else {
        for (const key in object1) {
            if (Array.isArray(object1[key])) {
                const output = eqArrays(object1[key], object2[key])
                console.log('output', output, object1[key], object2[key])
                if (output === false) {
                    return false
                }
            } else if (object1[key] !== object2[key]) {
                return false
            }


        }
    }
    return true
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false