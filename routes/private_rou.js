const express = require("express");
const {getPrivateData} = require("../routes/private");
const router = express.Router();
const {protect} = require("../middleware/auth");

router.route("/").get(protect, getPrivateData);

module.exports = router;