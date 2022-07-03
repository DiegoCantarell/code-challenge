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
     test("GET / -> #2 Test for get the explorers names", () => {
        return request(app)
            .get("/students/information")
            .then(response => {
                expect(response.statusCode).toBe(200);

                expect(response.text.length).toBe(10714);
                // done();
            });
    });
})
