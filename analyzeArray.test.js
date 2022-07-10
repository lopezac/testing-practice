const analyzeArray = require("./analyzeArray.js");

test("works with many numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 8, 3, 4])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 4,
  });
  expect(analyzeArray([1, 8, 3])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 3,
  });
  expect(analyzeArray([1, 8])).toEqual({
    average: 4.5,
    min: 1,
    max: 8,
    length: 2,
  });
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("works with negative numbers", () => {
  expect(analyzeArray([-1, -8, 3, 4, 2, 6])).toEqual({
    average: 1,
    min: -8,
    max: 6,
    length: 6,
  });
});
