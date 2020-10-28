const { Router } = require("express");

const router = new Router();

const studentArray = ["Sjouke", "Tim", "Thomas", "Roibin"];

router.get("/", (req, res) => {
  res.send(studentArray);
});

module.exports = router;
