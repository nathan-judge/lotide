
let head = function (actual) {
  if (actual[0]) {
    return actual[0];
  } else {
    return undefined;
  }
};

module.exports = head;