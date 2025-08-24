const express=require('express');
const path = require("path");

const routeDirectory = path.join(__dirname, "../view")
const welcome=express.Router();
welcome.get("/", (req, res) => {
  res.sendFile(path.join(routeDirectory, "welcome.html")); // serve welcome.html
});

module.exports = { welcome };