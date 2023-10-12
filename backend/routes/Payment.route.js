const paymentController = require("../controllers/payment.controller");

var express = require("express");

var router = express.Router();

router.get("/", paymentController.getAllPayment);

module.exports = router;
