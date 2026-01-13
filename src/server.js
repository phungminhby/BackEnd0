require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
// import express from 'express'  // es modules
const app = express(); // app express
const port = process.env.PORT || 8088; // port

//cfg
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

app.use("/", webRoutes);

// results contains rows returned by server
// fields contains extra meta data about results, if available

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
