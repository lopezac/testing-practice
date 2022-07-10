function analyzeArray(array) {
  const properties = {};

  properties.min = Math.min(...array);
  properties.max = Math.max(...array);
  properties.length = array.length;
  properties.average = array.reduce((prev, cur) => cur + prev) / array.length;

  return properties;
}

module.exports = analyzeArray;
