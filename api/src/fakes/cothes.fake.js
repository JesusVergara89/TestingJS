const  { faker } = require('@faker-js/faker');

const generateOneCothe = () => {
  return {
    _id: faker.string.uuid(),
    product: faker.commerce.productName(),
    price: faker.commerce.price(),
    brand: faker.commerce.productAdjective(),
  };
};

const generateCothes = (count) => {
  const limit = count || 10;
  const result = [];
  for (let i = 0; i < limit; i++) {
    result.push(generateOneCothe());
  }
  return [...result];
};

module.exports = {
  generateOneCothe,
  generateCothes,
};
