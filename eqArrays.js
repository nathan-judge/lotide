

const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] && (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))) {
            return false;
        }
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
            if (!eqArrays(array1[i], array2[i])) {
                return false;
            }
        }
    }
    return true;
};

module.exports = eqArrays;

