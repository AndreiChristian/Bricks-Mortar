import { NextFunction } from "connect";
import { Request, Response } from "express";
import prisma from "../db/prisma";
import { checkPassword, hashPassword } from "../utils/hash"
import { json } from "body-parser";
import { request } from "http";

export async function login(req: Request, res: Response, next: NextFunction) {

    const { email, password } = req.body;

    try {

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (!user) {
            throw new Error("User not found");
        }

        const ok = await checkPassword(password, user.password)

        if (!ok) {
            throw new Error("Wrong password")
        }

        return res.status(201).json({
            userID: user.userID,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        })


    } catch (err) {
        console.error(err)
        return res.status(400).json({ error: err.message })
    }

}

export async function register(req: Request, res: Response, next: NextFunction) {


    const { email, password, first_name, last_name } = req.body;

    console.table({ email, password, first_name, last_name })

    try {

        const hashedPassword = await hashPassword(password)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                first_name,
                last_name,

            }
        })


        return res.status(201).json({
            userID: user.userID,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        })


    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: err.message })
    }

}
