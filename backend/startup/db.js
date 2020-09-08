const mongoose = require("mongoose");
const config = require("../config/config");
require("dotenv").config();

module.exports = () => {
	const DB_URL = config.MONGODB_URL;
	try {
		mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("db connected successfully");
	} catch (err) {
		console.log(err);
	}
};
