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
exports.deleteCategory = exports.patchCategory = exports.postCategory = exports.getOneCategory = exports.getAllCategories = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const getAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prisma_1.default.category.findMany();
        if (!categories) {
            throw new Error("no categories");
        }
        return res.status(200).json(categories);
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
});
exports.getAllCategories = getAllCategories;
const getOneCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield prisma_1.default.category.findMany();
        if (!category) {
            throw new Error("no category with the id " + id);
        }
        return res.status(200).json(category);
    }
    catch (err) {
        return res.status(400).json({ err: err.message });
    }
});
exports.getOneCategory = getOneCategory;
const postCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.postCategory = postCategory;
const patchCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.patchCategory = patchCategory;
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteCategory = deleteCategory;
