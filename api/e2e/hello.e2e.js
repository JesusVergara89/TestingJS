const request = require("supertest");
const createApp = require("../src/app");

describe("Test for hello endpoint", () => {
  let app = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  describe("test for [GET] /", () => {
    test('Should return "Hello World!"', () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((res) => {
          expect(res.text).toEqual("Hello World!");
        });
    });
  });

  afterAll(async () => {
    await server.close();
  });
});
