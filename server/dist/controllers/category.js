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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.patchCategory = exports.postCategory = exports.getOneCategory = exports.getAllCategories = void 0;
const dummyData_1 = require("../dummyData");
const getAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const c = dummyData_1.categories;
    res.json(dummyData_1.categories);
});
exports.getAllCategories = getAllCategories;
const getOneCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const searchedCategory = dummyData_1.categories.find(c => c.categoryID == id);
    if (searchedCategory) {
        res.status(200).json(searchedCategory);
    }
    else {
        res.status(401).json({ "ok": false });
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
