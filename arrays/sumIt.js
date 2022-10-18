// Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.

var sumIt;
sumIt = function (arr) {
  var result = 0;
  for (i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
};

// DO NOT DELETE
module.exports = sumIt;
