function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function power(a, b) {
  let result = Math.pow(a, b);
  return result;
}
module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  power,
};
