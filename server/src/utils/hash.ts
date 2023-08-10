import { compare, hash } from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {

    try {

        const hashedPassword = await hash(password, saltRounds)
        return hashedPassword

    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }

}

export async function checkPassword(password: string, hashedPassword: string): Promise<boolean> {

    try {

        const ok = compare(password, hashedPassword)
        return ok

    } catch (error) {
        console.error('Error checking password:', error);
        throw error;
    }

}