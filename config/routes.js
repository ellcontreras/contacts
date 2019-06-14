var indexRouter = require("../routes/index");
var peopleRouter = require("../routes/people");

module.exports = app => {
  app.use("/", indexRouter);
  app.use("/people", peopleRouter);
  // !-- Do not remove this line --! //
};
