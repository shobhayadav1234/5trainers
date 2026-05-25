import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        const user = await User.findOne({ email });

        if (!user) {
            return Response.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            return Response.json(
                { message: "Invalid password" },
                { status: 401 }
            );
        }

        return Response.json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            { message: "Server Error" },
            { status: 500 }
        );
    }
}