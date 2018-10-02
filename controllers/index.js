const express = require("express");

const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.status(200).send({ hey: "Welcome to foodcomputer.io!" });
});

module.exports = router;
