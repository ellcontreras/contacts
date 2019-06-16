var express = require("express");
var router = express.Router();
var peopleController = require("../controllers/people.js");
/* GET home page. */
router.get("/", peopleController.getIndex);
router.post("/", peopleController.createPerson);

module.exports = router;
