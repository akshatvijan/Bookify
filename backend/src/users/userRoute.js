const express = require("express");
const { adminLogin } = require("./userContoller");
const router = express.Router();

router.post("/admin", adminLogin);

module.exports = router;