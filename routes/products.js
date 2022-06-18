const express = require('express')
const router = express.Router()
const productsController = require("../controllers/products");

router.get("/data/products", productsController.list);
router.get("/data/products/:id", productsController.show);
router.post("/data/products", productsController.create);


module.exports = router;