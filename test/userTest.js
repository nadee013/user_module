var User = require("../lib/user");
var assert = require("assert");
var mochaMongo = require("mocha-mongo");

var db = mochaMongo("mongodb://localhost");
var clean = db.cleanCollections(['users']);

suite("User", function() {

	suite(".register()", function() {

		test("With correct data", clean(function(db, done) {

			// done();
			var user = new User(db.collection('users'));
			user.register("nadee", "123", function(err) {
			
				assert.ifError(err);
				db.collection('users').findOne({_id: "nadee"}, function(err, result) {
					// console.log(result);
					assert.equal(result.password, "123");
					done();
				});
			});

		}));
	});

	// suite(".login()", function() {

	// 	test("With Correct data", function(done) {
			
	// 		user.login("arunoda", "123", function(err, result) {
	// 			assert.equal(result, true);
	// 			done();
	// 		});
	// 	});

	// 	test("With incorrect data", function(done) {

	// 		user.login("nadee", "234", function(err, result) {
	// 			assert.equal(result, false);
	// 			done();	
	// 		});
	// 	});
	// });
});