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
     test("GET / -> #2 Test for get students information", () => {
        return request(app)
            .get("/students/information")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.text.length).toBe(10714);
            });
    });
     test("GET / -> #3 Test for get the students emails", () => {
        return request(app)
            .get("/students/email/haveCertification=true")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.text.length).toBe(918);
            });
    });
     test("GET / -> #4 Test for get the students with credits aproved =500", () => {
        return request(app)
            .get("/students/credits/approved")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.text.length).toBe(5676);
            });
    });
})
