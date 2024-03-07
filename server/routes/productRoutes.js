import express from "express";
const router = express.Router();

// controllers
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  fetchTopProducts,
  fetchNewProducts,
} from "../controller/productController.js";

router.route("/").get(fetchProducts).post(addProduct);

router.route("/allproducts").get(fetchAllProducts);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router
  .route("/:id")
  .get(fetchProductById)
  .put(updateProductDetails)
  .delete(removeProduct);

export default router;
