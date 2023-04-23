const express = require("express");
const path = require("path");

const api = express();

api.use(express.static(path.join(__dirname, "public")));

api.use("/", express.static("index.html"));

// const PORT = 3000;

// api.listen(PORT);

module.exports = api;
