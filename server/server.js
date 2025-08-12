// import express from "express";
require("dotenv").config();
// require("./model/Data.model.js");
const express = require("express");
const cors = require("cors");
const middleware = require("./middleware/load.js");
const cookieParser = require("cookie-parser");
const connected = require("./db/connction.js");
const router = require("./router/Directory.router.js");
const routertask = require("./router/Tasks.router.js");
const routeuser = require("./router/User.router.js");
const app = express();
app.use(
  middleware,
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
  cookieParser()
);
app.use("/api/directories", router);
app.use("/api/tasks", routertask);
app.use("/api/users", routeuser);
const port = process.env.port || 3030;
async function name() {
  try {
    await connected(process.env.mongo_uri);
    app.listen(port, () => {
      console.log("server is run");
    });
  } catch (error) {
    console.log(error);
  }
}
name();
