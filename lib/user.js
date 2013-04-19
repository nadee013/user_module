function UserModule (collection) {

	this.register = function register(user, password, callback) {

		var user = {
			_id : user,
			password : password
		}

		collection.insert(user, callback);
	}

}

module.exports = UserModule;

// var data = exports.data = {};

// exports.register = function(user, password, callback) {

// 	data[user] = password;
// 	callback(null);
// };

// exports.login = function(user, password, callback) {

// 	var savedPassword = data[user];

// 	if(savedPassword == password) {
// 		callback(null, true);
// 	} else {
// 		callback(null, false);
// };