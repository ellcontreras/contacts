var errorConfig = require("./config/error");
var utilitiesConfig = require("./config/utilities");
var routesConfig = require("./config/routes");
var Sequelize = require("sequelize");

var express = require("express");

var app = express();

utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
