const math = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('multiplies 1 * 2 to equal 2', () => {
  expect(math.multiply(1, 2)).toBe(2);
});

test('subtracts 1 - 2 to equal -1', () => {
  const answer = math.subtract(1, 2);
  expect(answer).toBe(-1);
});

test('divides 1 / 2 to equal 0.5', () => {
  const answer1 = math.divide(1, 2);
  expect(answer1).toBe(0.5);
  const answer2 = math.divide(2, 0);
  expect(answer2).toBe(null);
});

