require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const recipesRouter = require("../recipes/router.js");
const cookbooksRouter = require("../cookbooks/router.js");

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use("/api/recipes", recipesRouter);
server.use("/api/cookbooks", cookbooksRouter);

server.get("/", (req, res) => {
  res.json({ api: "running" });
});

module.exports = server;
