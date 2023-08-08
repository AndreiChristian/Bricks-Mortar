import { Router } from "express";
import { getAllCategories, getOneCategory } from "../controllers/category";

const router = Router();

router.get("", getAllCategories )
router.post("",)
router.get("/:id",getOneCategory)
router.patch(":id",)
router.delete(":id",)

export default router;
