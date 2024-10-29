const Person = require("./06-person");

    // AAA
    // Arrange
    // Act
    // Assert

describe("Test for person", () => {
  // Arrange
  let person;
  beforeEach(() => {
    person = new Person("Jesus", 80, 1.8);
  });
  // Act
  test("Should return down", () => {
    // Arrange
    person.weight = 80;
    // Act
    const IMC = person.calcIMC()
    // Assert
    expect(IMC).toBe("overweight");
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
