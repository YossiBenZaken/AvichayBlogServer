// Imports
const express = require("express");
const mongooose = require("mongoose");
const cors = require("cors");
const nocache = require("nocache");
const app = express();
const logger = require("morgan");

// connect to the database
run().catch((err) => console.error(err));

// configure the app
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(nocache());
app.use(logger("combined"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// import the routes
app.use("/api", require("./routes/api"));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// error handling middleware
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

async function run() {
  const uri =
  "mongodb+srv://yossibz:PJNNBFWp4Xf7W4jE@avichay.r4puied.mongodb.net/avichay-blog?retryWrites=true&w=majority";
  await mongooose.connect(uri, {
    useNewUrlParser: true,
  });
  mongooose.Promise = global.Promise;
}
