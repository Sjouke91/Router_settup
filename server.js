const express = require("express");
const app = express();
const port = 4000;
const studentRouter = require("./studentrouter");
const teachersRouter = require("./teacherrouter");

app.use("/students", studentRouter);
app.use("/teachers", teachersRouter);

app.listen(port);
