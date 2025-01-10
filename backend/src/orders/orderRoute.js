const express = require("express");
const router = express.Router();
const Order = require("./orderModel");
const { createOrder, getOrderByEmail } = require("./orderController");

//create order endpoint
router.post("/",createOrder);

// get orders by user email 
router.get("/email/:email",getOrderByEmail)

module.exports = router;