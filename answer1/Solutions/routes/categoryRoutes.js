import express from "express";
import { categoryController } from "../controller/categoryController.js";

const router = express.Router();

//getALl category
router.get("/categories", categoryController);

export default router;