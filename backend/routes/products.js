const express = require("express");
const router = express.Router();

const { Product } = require("../model/products");

router.get("/", async (req, res) => {
	const product = await Product.find().sort("_id");
	res.send(product);
});

router.post("/", async (req, res) => {
	const product = new Product({
		_id: 4,
		name: "Best Pants",
		category: "Pants",
		image: "/images/p2.jpg",
		price: 70,
		brand: " Nike",
		rating: 4.5,
		numReviews: 8,
	});

	const result = await product.save();
	res.send(result);
});

module.exports = router;
