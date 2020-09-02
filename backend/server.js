const express = require("express");
const app = express();
require("./startup/db")("amazona");
const { Product } = require("./model/products");

app.get("/api/products", async (req, res) => {
	const product = await Product.find().sort("name");
	res.send(product);
});

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
