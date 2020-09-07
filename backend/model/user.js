const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, unique: true, required: true, trim: true },
	password: { type: String, minlength: 6, required: true },
	isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
