function sendResponse(res, err, result) {
	if (err) {
		res.json(err);
	} else {
		res.json(result);
	}
}

module.exports = {
	sendResponse,
}
