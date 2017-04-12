var expect = require("chai").expect;
var request = require("request");

describe("Js Interview Challenge Test", function () {
    describe("Checking URL (http://jsonplaceholder.typicode.com/posts) Status", function () {
        var url = "http://jsonplaceholder.typicode.com/posts";
        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("Content Type Json", function (done) {
            request(url, function (error, response, body) {
              expect('Content-Type', /json/);
               done();
            });
        });

    });
});