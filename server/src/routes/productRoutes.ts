import { Router } from "express";
import { createProduct, deleteProduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.post("/", deleteProduct);

export default router;
