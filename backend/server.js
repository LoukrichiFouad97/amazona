import express from "express";
import { dbConnect } from "./startup/db";

const app = express();
dbConnect("amazona");

app.get("/", (req, res) => {
	res.send("Hello from node server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
