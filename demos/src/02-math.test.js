const math = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('multiplies 1 * 2 to equal 2', () => {
  expect(math.multiply(1, 2)).toBe(2);
});
