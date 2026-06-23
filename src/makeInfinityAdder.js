'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let currentSum = 0;

  return function nextAdder(arg) {
    if (arg === undefined) {
      const value = currentSum;

      currentSum = 0;

      return value;
    }
    currentSum += arg;

    return nextAdder;
  };
}

module.exports = makeInfinityAdder;
