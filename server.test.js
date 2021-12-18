const request = require("supertest");
const app = require("./server.js")

// Describe is use to define a group of tests together  like a category of tests
// test or it is to perform individual tests
describe('Profile Route', () => {
    test("Get all Profiles", (done) =>{
        request(app).get("/").expect(200)
    });
});
