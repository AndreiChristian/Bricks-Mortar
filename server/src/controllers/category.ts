import { NextFunction, Request, Response } from "express"
import { categories } from "../dummyData"

export const getAllCategories = async (req:Request, res:Response, next:NextFunction) => {

  const c = categories;

  res.json(categories)

}

export const getOneCategory = async (req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const searchedCategory = categories.find(c => c.categoryID == id);

  if(searchedCategory){
    res.status(200).json(searchedCategory)
  }else{
    res.status(401).json({"ok":false})
  }

}

export const postCategory= async (req:Request, res:Response, next:NextFunction) => {


}

export const patchCategory= async (req:Request, res:Response, next:NextFunction) => {

}

export const deleteCategory= async (req:Request, res:Response, next:NextFunction) => {

}
