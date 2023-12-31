"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_1 = require("../controllers/item");
const router = (0, express_1.Router)();
router.get("", item_1.getAllItems);
router.get("/subcategory/:id", item_1.getAllItemsBySubcategoryId);
router.post("");
router.get("/:id", item_1.getOneItem);
router.patch(":id");
router.delete(":id");
exports.default = router;
