var user = require("../lib/user");
var assert = require("assert");

suite("User", function() {

	suite(".register()", function() {

		test("With correct data", function(done) {

			user.register("arunoda", "123", function(err) {
				assert.equal(user.data["arunoda"], "123");
				done();
			});
		});
	});

	suite(".login()", function() {

		test("With Correct data", function(done) {
			
			user.login("arunoda", "123", function(err, result) {
				assert.equal(result, true);
				done();
			});
		});

		test("With incorrect data", function(done) {

			user.login("nadee", "234", function(err, result) {
				assert.equal(result, false);
				done();	
			});
		});
	});
});