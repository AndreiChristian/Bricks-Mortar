import { Router } from "express";
import { getAllSubcategories, getAllSubcategoriesByCategoryId, getOneSubcategory } from "../controllers/subcategory";

const router = Router();

router.get("", getAllSubcategories )
router.get("/category/:id",getAllSubcategoriesByCategoryId )
router.post("",)
router.get("/:id",getOneSubcategory)
router.patch(":id",)
router.delete(":id",)

export default router;

