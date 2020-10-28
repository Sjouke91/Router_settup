const { Router } = require("express");

const router = new Router();

const teachersArray = ["Rein", "Matias", "Karla", "Jeroen"];

router.get("/", (req, res) => {
  res.send(teachersArray);
});

module.exports = router;
