const request = require("supertest");
const app = require("./../../lib/server/app.js");
describe("User Endpoints Tests",() => {
  test("#1 GET -> Test for Welcome ", () => {
      return request(app)
        .get("/")
        .then(response => {
        expect(response.statusCode).toBe(200);
        //done();
        })
    })
})
