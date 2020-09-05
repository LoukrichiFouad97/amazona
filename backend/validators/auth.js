const { check } = require("express-validator");

exports.productValidator = [
	check("_id").isInt({min: 0, max: 99}).not().isEmpty().withMessage("ID is required"),
	check("name").isString().not().isEmpty().withMessage("name is required"),
	check("category")
		.isString()
		.not()
		.isEmpty()
		.withMessage("Category is required"),
	check("image").isString().not().isEmpty().withMessage("Image is required"),
	check("price").not().isEmpty().withMessage("Price is required"),
	check("brand").isString().not().isEmpty().withMessage("Brans is required"),
	check("rating")
		.isInt({ min: 1, max: 5 })
		.not()
		.isEmpty()
		.withMessage("Rating must be 1-5"),
	check("numReviews").not().isEmpty().withMessage("Review is required"),
];

