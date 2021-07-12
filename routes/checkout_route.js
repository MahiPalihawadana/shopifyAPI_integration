const express = require('express');

const router = express.Router();

const checkout_controller = require("../controllers/checkout_controller");

router.post("/createcheckout", checkout_controller.createCheckout);

router.patch("/updateEmail/:checkout_id",checkout_controller.updateEmail);

router.patch("/updateShippingaddress",checkout_controller.updateShippingaddress);

router.patch("/updateShippingrate",checkout_controller.updateShippingrate);

module.exports = router;