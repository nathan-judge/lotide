const assertEqual = require('./assertEqual');
const findKey = function (object, callback) {
    const result = Object.keys(object);
    for (let key of result) {
        if (callback(object[key])) {
            return key;
        }
    }
};

const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result1, 'noma');

