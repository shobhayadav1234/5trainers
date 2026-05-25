import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        await connectDB();

        const { name, email, phone, password } = await req.json();

        if (!name || !email || !phone || !password) {
            return Response.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return Response.json(
                { message: "Email already registered" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        return Response.json(
            {
                success: true,
                message: "Registration successful",
                user,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            { message: "Server Error" },
            { status: 500 }
        );
    }
}