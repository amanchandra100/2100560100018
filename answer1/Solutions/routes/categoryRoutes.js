import express from "express";
import { categoryController } from "../controller/categoryController.js";

const router = express.Router();

//getALl category
router.get("/:companyname/category/:categoryname/products", categoryController);

export default router;