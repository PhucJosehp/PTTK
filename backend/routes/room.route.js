const roomCrontroller = require("../controllers/room.controller");

var express = require("express");

var router = express.Router();

router.get("/", roomCrontroller.getAllRooms);

module.exports = router;
