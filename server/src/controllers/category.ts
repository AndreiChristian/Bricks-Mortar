import { NextFunction, Request, Response } from "express"
import prisma from "../db/prisma"

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const categories = await prisma.category.findMany();

    if (!categories) {
      throw new Error("no categories")
    }

    return res.status(200).json(categories)

  } catch (err) {
    return res.status(400).json({ err: err.message })
  }

}

export const getOneCategory = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;

  try {

    const category = await prisma.category.findMany();

    if (!category) {
      throw new Error("no category with the id " + id)
    }

    return res.status(200).json(category)

  } catch (err) {
    return res.status(400).json({ err: err.message })
  }
}

export const postCategory = async (req: Request, res: Response, next: NextFunction) => {


}

export const patchCategory = async (req: Request, res: Response, next: NextFunction) => {

}

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {

}
