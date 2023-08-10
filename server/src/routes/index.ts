import { Router } from "express";
import categoryRouter from "./category"
import subcategoryRouter from "./subcategory"
import authRouter from "./auth"
import itemRouter from "./item"

const router = Router();

router.use("/auth", authRouter)
router.use("/categories", categoryRouter)
router.use("/subcategories", subcategoryRouter)
router.use("/items", itemRouter)

export default router;