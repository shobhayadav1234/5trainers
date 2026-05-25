"use client";

import { useState } from "react";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

                <h1 className="text-2xl font-bold mb-5">
                    Forgot Password
                </h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full border px-4 py-3 rounded-lg mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                    Send Reset Link
                </button>

            </div>

        </div>
    );
}