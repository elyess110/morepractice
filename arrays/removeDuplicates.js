// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates;
removeDuplicates = function (array) {
  var unique = [];
  for (var i =0; i <array.length; i++) {
    if (unique.indexOf(array[i] === -1)) {
      unique.push(array[i]);
    }
  }
  return unique;

};
// DO NOT DELETE
module.exports = removeDuplicates;
