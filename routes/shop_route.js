const express = require('express');

const router = express.Router();

const shops_controller = require('../controllers/shop_controller');

router.get("/shop-info", shops_controller.getShopinfo);



module.exports = router;