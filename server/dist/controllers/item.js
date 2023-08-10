"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubcategory = exports.patchSubcategory = exports.postSubcategory = exports.getOneItem = exports.getAllItemsBySubcategoryId = exports.getAllItems = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield prisma_1.default.item.findMany();
        if (!items) {
            throw new Error("No items");
        }
        return res.status(200).json(items);
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
});
exports.getAllItems = getAllItems;
const getAllItemsBySubcategoryId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const items = yield prisma_1.default.item.findMany({
            where: {
                subcategoryID: +id
            }
        });
        if (!items) {
            throw new Error("No items");
        }
        return res.status(200).json(items);
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
});
exports.getAllItemsBySubcategoryId = getAllItemsBySubcategoryId;
const getOneItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const items = yield prisma_1.default.item.findMany({
            where: {
                itemID: +id
            }
        });
        if (!items) {
            throw new Error("No items");
        }
        return res.status(200).json(items);
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
});
exports.getOneItem = getOneItem;
const postSubcategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.postSubcategory = postSubcategory;
const patchSubcategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.patchSubcategory = patchSubcategory;
const deleteSubcategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteSubcategory = deleteSubcategory;
