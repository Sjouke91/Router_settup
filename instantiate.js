const express = require("express");

const { Router } = express;
const router = new Router();

router.get("/hi/:name", (request, response) => {
  const name = request.params.name;
  response.send(`hi ${name}`);
});

module.exports = router;
