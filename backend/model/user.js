const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
	_id: { type: String },
	name: { type: String, required: true, trim: true },
	email: { type: String, unique: true, required: true, trim: true },
	password: { type: String, minlength: 6, required: true },
	isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
