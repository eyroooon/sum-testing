const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 5 to equal 6", () => {
  expect(sum(2, 7)).toBe(9);
});
