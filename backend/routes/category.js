const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const categoryController = require("../Controllers/categoryController");

router.get("/categories", categoryController.getAllCategories);

router.post("/createcategory", categoryController.createCategory);

router.patch("/:cid", categoryController.editCategory);

router.delete("/:cid", categoryController.deleteCategory);

router.get("/:cid", categoryController.getProductsByCategory);

router.get("/name/:cid", categoryController.getCategoryById);

module.exports = router;
