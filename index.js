const express = require("express");
const app = express();
const port = 4000;
const router = require("./instantiate.js");

app.use(router);

app.listen(port);
