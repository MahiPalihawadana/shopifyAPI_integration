const express = require('express');

const router = express.Router();

const collections_controller = require("../controllers/collection_controller");

router.get("/getCategories", collections_controller.getListofCollections);



router.get("/getProductsofCategory/:category", collections_controller.getAllproductsOfcategory);

router.get("/getCollections", collections_controller.getcollections);

// router.get("/getProductsofTops/getMoreproductsofTops/:cursor",collections_controller.getMoreproductsOftops); 

module.exports = router;