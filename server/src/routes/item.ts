import { Router } from "express";
import { getAllItems, getAllItemsBySubcategoryId, getOneItem } from "../controllers/item";

const router = Router();

router.get("", getAllItems)
router.get("/subcategory/:id", getAllItemsBySubcategoryId)
router.post("",)
router.get("/:id",getOneItem)
router.patch(":id",)
router.delete(":id",)

export default router;
