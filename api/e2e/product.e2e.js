const { generateCothes, generateOneCothe } = require("../src/fakes/cothes.fake");
const request = require("supertest");
const createApp = require("../src/app");

// Define `mockGetAll` dentro de `jest.mock`
jest.mock("../src/lib/mongo.lib", () => {
  const mockGetAll = jest.fn();  // Mueve la declaración aquí
  return jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }));
});

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for [GET] /api/v1/books", () => {
    test("Should return list books", () => {
      const fakeProducts = generateCothes(5);
      const mongoLib = require("../src/lib/mongo.lib");
      mongoLib().getAll.mockResolvedValue([...fakeProducts]);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(5);
        });
    });
  });
});
