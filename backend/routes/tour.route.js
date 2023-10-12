const tourController = require("../controllers/tour.controller");

var express = require("express");

var router = express.Router();

router.get("/", tourController.getAllTour);

module.exports = router;
