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
exports.deleteSubcategory = exports.patchSubcategory = exports.postSubcategory = exports.getOneItem = exports.getAllItemsBySubcategoryId = exports.getAllItems = void 0;
const dummyData_1 = require("../dummyData");
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const c = dummyData_1.items;
    res.json(c);
});
exports.getAllItems = getAllItems;
const getAllItemsBySubcategoryId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const searchedSubcategory = dummyData_1.items.find(c => c.subcategoryID == id);
    if (searchedSubcategory) {
        res.status(200).json(searchedSubcategory);
    }
    else {
        res.status(401).json({ "ok": false });
    }
});
exports.getAllItemsBySubcategoryId = getAllItemsBySubcategoryId;
const getOneItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const searchedSubcategory = dummyData_1.items.find(c => c.itemID == id);
    if (searchedSubcategory) {
        res.status(200).json(searchedSubcategory);
    }
    else {
        res.status(401).json({ "ok": false });
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
