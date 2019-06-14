var express = require("express");
var router = express.Router();
var peopleController = require("../controllers/people.js");
/* GET home page. */
router.get("/", peopleController.getIndex);

module.exports = router;
