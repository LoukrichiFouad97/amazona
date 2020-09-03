const express = require("express");
const router = express.Router();

const { Product } = require("../model/products");
const { productValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.get("/", async (req, res) => {
	const product = await Product.find().sort("_id");
	res.send(product);
});

router.post("/", productValidator, runValidation, async (req, res) => {
	const {
		_id,
		name,
		category,
		price,
		image,
		brand,
		rating,
		numReviews,
	} = req.body;
	const product = new Product({
		_id,
		name,
		category,
		image,
		price,
		brand,
		rating,
		numReviews,
	});

	const result = await product.save();
	res.send(result);
});

router.delete("/:id", async (req, res) => {
	const product = await Product.findByIdAndDelete(req.body._id);
	if (!product) return res.status(404).send("Product not found");

	res.send(product)
});

module.exports = router;
