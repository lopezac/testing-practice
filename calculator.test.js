const calculator = require("./calculator.js");

// Add method
test("calculator add with single nums", () => {
  expect(calculator.add(2, 1)).toEqual(3);
  expect(calculator.add(7, 5)).toEqual(12);
  expect(calculator.add(1, 1)).toEqual(2);
});

test("calculator add with greater nums", () => {
  expect(calculator.add(215, 300)).toEqual(515);
  expect(calculator.add(9000, 467523)).toEqual(476523);
  expect(calculator.add(99, 150)).toEqual(249);
});

test("calculator add works with 0", () => {
  expect(calculator.add(7, 0)).toEqual(7);
  expect(calculator.add(515, 0)).toEqual(515);
});

// Subtract method
test("calculator subtract single nums", () => {
  expect(calculator.subtract(2, 1)).toEqual(1);
  expect(calculator.subtract(7, 5)).toEqual(2);
  expect(calculator.subtract(1, 1)).toEqual(0);
});

test("calculator subtract with greater nums", () => {
  expect(calculator.subtract(215, 300)).toEqual(-85);
  expect(calculator.subtract(9000, 467523)).toEqual(-458523);
  expect(calculator.subtract(99, 150)).toEqual(-51);
});

test("calculator subtract works with 0", () => {
  expect(calculator.subtract(7, 0)).toEqual(7);
  expect(calculator.subtract(515, 0)).toEqual(515);
});

test("calculator subtract works with negative numbers", () => {
  expect(calculator.subtract(7, -500)).toEqual(507);
  expect(calculator.subtract(-7, -500)).toEqual(493);
  expect(calculator.subtract(-515, -900)).toEqual(385);
});

// Divide method
test("calculator divide with single nums", () => {
  expect(calculator.divide(2, 1)).toEqual(2);
  expect(calculator.divide(7, 5)).toBeCloseTo(1.4);
  expect(calculator.divide(1, 1)).toEqual(1);
});

test("calculator divide with greater nums", () => {
  expect(calculator.divide(215, 300)).toBeCloseTo(0.7166666666666667);
  expect(calculator.divide(9000, 467523)).toBeCloseTo(0.019250389820393864);
  expect(calculator.divide(99, 150)).toBeCloseTo(0.66);
});

test("calculator divide works with 0", () => {
  expect(calculator.divide(7, 0)).toEqual(Infinity);
  expect(calculator.divide(515, 0)).toEqual(Infinity);
});

test("calculator divide works with negative numbers", () => {
  expect(calculator.divide(7, -500)).toBeCloseTo(-0.014);
  expect(calculator.divide(-7, -500)).toBeCloseTo(0.014);
  expect(calculator.divide(-515, -900)).toBeCloseTo(0.5722222222222222);
});

// Multiply method
test("calculator multiply with single nums", () => {
  expect(calculator.multiply(2, 1)).toEqual(2);
  expect(calculator.multiply(7, 5)).toEqual(35);
  expect(calculator.multiply(1, 1)).toEqual(1);
});

test("calculator multiply with greater nums", () => {
  expect(calculator.multiply(215, 300)).toEqual(64500);
  expect(calculator.multiply(9000, 467523)).toEqual(4207707000);
  expect(calculator.multiply(99, 150)).toEqual(14850);
});

test("calculator multiply works with 0", () => {
  expect(calculator.multiply(7, 0)).toEqual(0);
  expect(calculator.multiply(515, 0)).toEqual(0);
});

test("calculator multiply works with negative numbers", () => {
  expect(calculator.multiply(7, -500)).toBe(-3500);
  expect(calculator.multiply(-7, -500)).toBe(3500);
  expect(calculator.multiply(-515, -900)).toBe(463500);
});
