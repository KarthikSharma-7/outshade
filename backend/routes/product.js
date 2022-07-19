const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const productController = require("../Controllers/productController");

router.get("/", productController.getAllProducts);

router.get("/:pid", productController.getProduct);

router.post(
  "/createproduct",
  [
    check("name").not().isEmpty(),
    check("price").not().isEmpty(),
    check("userId").not().isEmpty(),
    check("categoryId").not().isEmpty(),
  ],
  productController.createProduct
);

router.patch("/:pid", productController.editProduct);

router.delete("/:pid", productController.deleteProduct);

module.exports = router;
