const request = require("supertest");
const app = require("../../app");
const {mongoConnect,mongoDisconnect } = require("../../services/mongo")

describe("Test planet API using MongoDB", () => {
beforeAll(async() => {
  await mongoConnect()
})
afterAll(async () => {
  await mongoDisconnect()})

  describe("Test GET /planets", () => {
    test("The response should be 200", async () => {
      const response = await request(app)
        .get("/v1/planets")
        .expect("Content-Type", /json/)
        // expect(response).toBe(200)
        .expect(200);
    });
  });
})

