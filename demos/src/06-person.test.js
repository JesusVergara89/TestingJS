const Person = require("./06-person");

describe("Test for person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Jesus", 80, 1.8);
  });
  test("Should return down", () => {
    person.weight = 80;
    expect(person.calcIMC()).toBe("overweight");
  });
  test("Should return down", () => {
    person.weight = 75;
    expect(person.calcIMC()).toBe("normal");
  });
  test("Should return down", () => {
    person.weight = 120;
    expect(person.calcIMC()).toBe("overweight level 2");
  });
});
