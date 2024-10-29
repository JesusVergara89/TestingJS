const math = require('./02-math');

describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  afterAll(() => {
    console.log('afterAll');
  });

  //beforeEach(() => {
  //  console.log('beforeEach');
  //});
  //afterEach(() => {
  //  console.log('afterEach');
  test('should first', () => {
    expect(true).toBe(true);
   })
   test('add two numbers', () => {
    expect(math.sum(1, 2)).toBe(3);
  });
  describe('nested', () => {
    beforeAll(() => {
      console.log('beforeAll-nested');
    });
    afterAll(() => {
      console.log('afterAll-nested');
    });
    test('should second', () => {
      expect(true).toBe(true);
    });
    test('add two numbers', () => {
      expect(math.sum(1, 2)).toBe(3);
    });
  });
});
