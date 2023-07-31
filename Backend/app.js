const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
require("dotenv").config({ path: "backend/config/config.env" });
// }
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
// app.use(express.json());
// app.use(cookieParser());
// // app.use(fileUpload());
// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json());


// Route Imports
const pengci = require("./routes/scoreRoute");


app.use("/pengci/", pengci);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;