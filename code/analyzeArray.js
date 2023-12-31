function analyArray(array) {
  let object = {};
  object.average = array.reduce((a, b) => a + b) / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
}

module.exports = analyArray;
