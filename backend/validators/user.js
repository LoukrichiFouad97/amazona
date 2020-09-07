const { check } = require("express-validator");

exports.userValidator = [
	check("name").isString().notEmpty().withMessage("name is required!"),
	check("email").isEmail().notEmpty().withMessage("email is required!"),
	check("password").isString().notEmpty().withMessage("password is required!"),
	check("isAdmin").isBoolean(),
];
