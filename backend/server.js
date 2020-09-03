const express = require("express");
const app = express();
require("./startup/db")("amazona");
require("./startup/routes")(app);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
