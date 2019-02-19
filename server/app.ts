import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import logger = require("morgan");

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

let string = "ssssddssssww";

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
