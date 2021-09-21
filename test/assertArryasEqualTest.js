const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['cool', 'cat', 'kitty'], ['cool', 'cat', 3, 'kitty']);
assertArraysEqual(['cool', 2, false], ['cool', 2, false]);