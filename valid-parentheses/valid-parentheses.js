/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (char != map[last]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
