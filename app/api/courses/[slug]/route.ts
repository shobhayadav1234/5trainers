import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Course from "@/models/Course";
import { revalidatePath } from "next/cache";

// GET SINGLE COURSE
export async function GET(
    req: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectDB();

        const { slug } = await params;

        const course = await Course.findOne({ slug });

        return NextResponse.json({
            success: true,
            data: course,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Server Error",
            },
            { status: 500 }
        );
    }
}
// UPDATE COURSE
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectDB();

        const { slug } = await params;
        const body = await req.json();

        const updatedCourse = await Course.findOneAndUpdate(
            { slug },
            body,
            { new: true }
        );

        // 🔥 THIS IS IMPORTANT (ADD HERE)
        revalidatePath(`/courses/${slug}`);

        return NextResponse.json({
            success: true,
            data: updatedCourse,
        });

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Update Failed",
            },
            { status: 500 }
        );
    }
}