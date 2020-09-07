const express = require("express");
const app = express();
const morgan = require("morgan");
const debug = require("debug")("app:startup");
require("./startup/db")();
require("./startup/routes")(app);
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
	console.log("asdad");
	app.use(morgan("tiny"));
	debug("morgan started in dev env");
}

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
