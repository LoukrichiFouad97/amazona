const mongoose = require("mongoose");

module.exports = (dbName) => {
	const DB_URL = `mongodb://localhost/${dbName}`;
	try {
		mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.log(err);
	}
};
