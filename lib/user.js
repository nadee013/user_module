var data = exports.data = {};

exports.register = function(user, password, callback) {

	data[user] = password;
	callback(null);
};

exports.login = function(user, password, callback) {

	var savedPassword = data[user];

	if(savedPassword == password) {
		callback(null, true);
	} else {
		callback(null, false);
	}
};