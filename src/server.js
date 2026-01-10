const express = require("express"); //commonjs
const path = require("path");
require("dotenv").config();
// import express from 'express'  // es modules
const app = express(); // app express
const port = process.env.PORT || 8088; // port

console.log(process.env);
// cfg tpl engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai báo route
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
});

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
