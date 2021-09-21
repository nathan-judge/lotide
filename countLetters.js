const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
    }
};

const countLetters = function (word) {
    let result = {};
    const newList = word.split(' ').join('').toLowerCase();
    for (const letter of newList) {
        if (result[letter]) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
    }
    return result;
};

console.log(countLetters("lighthouse in the house"))