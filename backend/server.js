import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello from node server");
});

app.listen(5000, () => console.log("Server started at 5000"));
