const assertEqual = require('./assertEqual');

const findKeyByValue = function (inputOb, value) {
    const inputObKeys = Object.keys(inputOb);
    for (const key of inputObKeys) {
        if (inputOb[key] === value) {
            return key;
        }
    }
};


const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

