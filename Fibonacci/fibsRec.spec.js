import fibsRec from "./fibsRec.js";

test("Return an array with inputed length", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("returns one Fibonacci number", () => {
  expect(fibsRec(1)).toEqual([0]);
});