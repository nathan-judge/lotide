const assertEqual = require('./assertEqual');

let head = function (actual) {
  if (actual[0]) {
    return actual[0];
  } else {
    return undefined;
  }
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");