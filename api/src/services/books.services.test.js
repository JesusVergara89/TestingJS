const BooksService = require("./books.service");

const fakeProducts = [
  {
    _id: "6720faca00b3498e8b47af87",
    product: "t-shirt",
    price: 12345,
    brand: "FashionCo",
  },
  {
    _id: "6720fb1e00b3498e8b47af88",
    product: "jeans",
    price: 54990,
    brand: "DenimFit",
  },
  {
    _id: "6720fb2a00b3498e8b47af89",
    product: "sneakers",
    price: 67999,
    brand: "SportySteps",
  },
  {
    _id: "6720fb3b00b3498e8b47af8a",
    product: "hoodie",
    price: 34990,
    brand: "UrbanWear",
  },
  {
    _id: "6720fb4900b3498e8b47af8b",
    product: "jacket",
    price: 89999,
    brand: "WarmCoat",
  },
];

const MongoLibStub = {
  getAll: () => [...fakeProducts],
  create: () => {},
};

jest.mock("../lib/mongo.lib", () => jest.fn().mockImplementation(()=> MongoLibStub));

describe("Test for Books BooksService", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe("getBooks", () => {
    //follow AAA pattern, arrange, act, assert
    test("should return a list of books", async () => {
      //Arrange
      //Act
      const books = await service.getBooks();
      console.log(books);
      //Assert
      expect(books.length).toEqual(5);
    });
  });
});
