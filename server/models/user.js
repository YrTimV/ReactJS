const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	username: {type: String, required: true, index: true, unique: true, minlength: 3, matches: /\S+/i},
	email: {type: String, required: true, minlength: 6, matches: /\S/},
	registerDate: {type: Date, required: true},
	lastVisitDate: {type: Date},
	firstName: {type: String, minlength: 2, matches: /\w/},
	lastName: {type: String, minlength: 2, matches: /\w/},
	age: {type: Number, min: 16, max: 99},
	mainRole: {type: String, enum: ['Admin', 'User'], required: true},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
