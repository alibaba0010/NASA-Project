const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Test Launch API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });
  afterAll(async () => {
    await mongoDisconnect();
  });
  describe("Test GET /launches", () => {
    test("The response should be 200", async () => {
      const response = await request(app)
        .get("/v1/launches")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
  describe("Test POST /launches", () => {
    const completeLaunchData = {
      launchDate: new Date("September 7, 2024"),
      target: "Kepler-442 b",
      mission: "Akinkunmi",
      rocket: "Explorer IS2",
    };
    const launchDataWithoutDate = {
      target: "Kepler-442 b",
      mission: "Akinkunmi",
      rocket: "Explorer IS2",
    };
    const launchDataWithInvalidDate = {
      mission: "USS Enterprise",
      rocket: "Kepler-442 b",
      target: "Kepler-62 f",
      launchDate: "zoot",
    };

    test("The response should be 201 created", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(completeLaunchData)
        .expect("Content-Type", /json/)
        .expect(201);

      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();

      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDataWithoutDate);
      // expect(response.body).toMatch(launchDataWithoutDate);
    });
    test("It should catch missing required ppts", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithoutDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });
    test("It should catch invalid dates", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithInvalidDate)
        .expect("content-Type", /json/)
        .expect(400);
      expect(response.body).toStrictEqual({
        error: "Invalid launch date",
      });
    });
  });
});
