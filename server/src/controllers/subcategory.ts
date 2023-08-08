import { NextFunction, Request, Response } from "express"
import { subcategories} from "../dummyData"

export const getAllSubcategories = async (req:Request, res:Response, next:NextFunction) => {

  const c = subcategories;

  res.json(c)

}

export const getAllSubcategoriesByCategoryId= async (req:Request, res:Response, next:NextFunction) => {
  const {id} = req.params;

  const searchedSubcategory = subcategories.find(c => c.categoryID == id);

  if(searchedSubcategory){
    res.status(200).json(searchedSubcategory)
  }else{
    res.status(401).json({"ok":false})
  }
}

export const getOneSubcategory = async (req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const searchedSubcategory = subcategories.find(c => c.subcategoryID == id);

  if(searchedSubcategory){
    res.status(200).json(searchedSubcategory)
  }else{
    res.status(401).json({"ok":false})
  }

}

export const postSubcategory= async (req:Request, res:Response, next:NextFunction) => {


}

export const patchSubcategory = async (req:Request, res:Response, next:NextFunction) => {

}

export const deleteSubcategory = async (req:Request, res:Response, next:NextFunction) => {

}
