const common = require('../common');
const User = require('../models/user');

function handleRoutes(app) {
	app.get('/users', (req, res) => {
		User
			.find()
			.exec((err, result) => {
        common.sendResponse(res, err, result);
			});
	});

	app.get('/users/:id', (req, res) => {
		const { id } = req.params;

		User
			.findById(id)
			.exec((err, result) => {
				if (err) {
					common.sendResponse(res, err);
					return;
				}

				if (!result) {
					common.sendResponse(res, null, {
						id,
						error: 'The user is not found.'
					});
					return;
				}
			
				common.sendResponse(res, err, [result]);
			});
	});

	app.post('/users', (req, res) => {
		const { username, password, email, firstName, lastName, age } = req.body;
		
		User
			.findOne({username})
			.exec((err, result) => {
				if (err) {
					common.sendResponse(res, err);
					return;
				}

				if (result) {
					common.sendResponse(res, null, {
						username,
						error: `The user is already registered.`
					});
					return;
				}
			});

		const user = new User({
			username,
      email,
      registerDate: Date.now(),
      firstName,
      lastName,
      age,
			mainRole: 'User'
		});

		User
			.register(user, password,	(err, result) => {
				common.sendResponse(res, err, result);
			});
	});

	app.patch('/users/:id', (req, res) => {
		const { id } = req.params;

		User
			.findById(id)
			.exec((err, result) => {
				if (err) {
					common.sendResponse(res, err);
					return;
				}

				if (!result) {
					common.sendResponse(res, null, {
						id,
						error: 'The user is not found.'
					});
					return;
				}
				
				const {
					email = result.email,
					firstName = result.firstName,
					lastName = result.lastName,
					age = result.age
				} = req.body;

				result.email = email;
				result.firstName = firstName;
				result.lastName = lastName;
				result.age = age;

				result.save((err, result) => {
					common.sendResponse(res, err, result);
				});
			});
	});

	app.delete('/users/:id', (req, res) => {
		const { id } = req.params;

		User
			.findByIdAndRemove(id)
			.exec((err, result) => {
				if (!result) {
					common.sendResponse(res, null, {
						id,
						error: 'The user is not found.'
					});
				} else {
					common.sendResponse(res, null, {
						id,
						message: 'The user has been deleted.'
					});
				}
			});
	});
}

module.exports = handleRoutes;
