import { NextFunction, Request, Response } from "express"
import { items} from "../dummyData"

export const getAllItems = async (req:Request, res:Response, next:NextFunction) => {

  const c = items;

  res.json(c)

}

export const getAllItemsBySubcategoryId = async (req:Request, res:Response, next:NextFunction) => {
  const {id} = req.params;

  const searchedSubcategory = items.find(c => c.subcategoryID == id);

  if(searchedSubcategory){
    res.status(200).json(searchedSubcategory)
  }else{
    res.status(401).json({"ok":false})
  }
}

export const getOneItem = async (req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const searchedSubcategory = items.find(c => c.itemID == id);

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

