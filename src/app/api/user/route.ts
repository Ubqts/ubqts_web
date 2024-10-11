import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from 'zod';

const userSchema = z.object({
    username: z.string().min(1, '帳號不得為空').min(4, '帳號長度不得小於4').max(20, '帳號長度不得大於20'),
    password: z.string().min(1, '密碼不得為空').min(6, '密碼長度不得小於6').max(30, '密碼長度不得大於30'),
    role: z.enum(['admin', 'user']),
})

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, password, role } = userSchema.parse(body);

        const existingUser = await db.user.findUnique({
            where: { username: username }
        });
        if (existingUser) {
            return NextResponse.json({
                user: null,
                message: "User already exists"
            }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                password: hashedPassword,
                role,
            }
        });
        const { password: newUserPassword, ...newUserWithoutPassword } = newUser;
        return NextResponse.json({
            user: newUserWithoutPassword,
            message: "User created successfully"
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}