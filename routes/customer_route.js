const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customer_controller');

router.post("/createNewCustomer", customerController.createNewCustomer);
router.post("/createCustomerAddress", customerController.createCustomerAddress);
router.post("/updateCustomerAddress", customerController.updateCustomerAddress);
router.post("/createCustomerAccessToken", customerController.createCustomerAccessToken);
router.post("/getCustomerDetails", customerController.getCustomerDetails);




module.exports = router;