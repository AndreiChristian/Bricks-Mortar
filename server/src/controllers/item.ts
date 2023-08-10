import { NextFunction, Request, Response } from "express"
import { items } from "../dummyData"
import prisma from "../db/prisma"

export const getAllItems = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const items = await prisma.item.findMany()

    if (!items) {
      throw new Error("No items")
    }

    return res.status(200).json(items)

  } catch (err) {
    return res.status(400).json({ err: err.message })
  }

}

export const getAllItemsBySubcategoryId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {

    const items = await prisma.item.findMany({
      where: {
        subcategoryID: +id
      }
    })

    if (!items) {
      throw new Error("No items")
    }

    return res.status(200).json(items)

  } catch (err) {
    return res.status(400).json({ err: err.message })
  }

}

export const getOneItem = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;

  try {

    const items = await prisma.item.findMany({
      where: {
        itemID: +id
      }
    })

    if (!items) {
      throw new Error("No items")
    }

    return res.status(200).json(items)

  } catch (err) {
    return res.status(400).json({ err: err.message })
  }



}

export const postSubcategory = async (req: Request, res: Response, next: NextFunction) => {


}

export const patchSubcategory = async (req: Request, res: Response, next: NextFunction) => {

}

export const deleteSubcategory = async (req: Request, res: Response, next: NextFunction) => {

}

