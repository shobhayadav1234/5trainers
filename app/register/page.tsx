"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Registration Successful");

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        /* Responsive background gradient matching the sign-in theme */
        <div className="min-h-screen bg-gradient-to-tr from-[#20c9b0] to-[#eab308] flex items-center justify-center px-4 py-8-sm:py-12">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 sm:p-8">

                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0] transition text-sm sm:text-base"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Email Address Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0] transition text-sm sm:text-base"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0] transition text-sm sm:text-base"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0] transition text-sm sm:text-base"
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Black Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition shadow-md disabled:bg-gray-700 text-sm sm:text-base mt-2"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                    {/* Navigation Link back to Sign In */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-[#20c9b0] font-medium hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}