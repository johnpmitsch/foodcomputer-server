const express = require("express");

const router = express.Router();

router.get("/ping", (_req, res, _next) => {
  res.status(200).send({ ping: "Hello There! Welcome to foodcomputer.io!" });
});

module.exports = router;
