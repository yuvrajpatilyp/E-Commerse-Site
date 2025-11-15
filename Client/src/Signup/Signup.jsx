import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TopHeader from "../Reusable/TopHeader";
import NavigationBar from "../Reusable/NavigationBar";
import Footer from "../Reusable/Footer";
import { Link } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z]+$/.test(form.name.trim())) {
            newErrors.name =
                "Name must contain only alphabets (no spaces or numbers)";
        }

        if (!form.contact.trim()) {
            newErrors.contact = "Email or phone number is required";
        } else if (
            !/^\d{10}$/.test(form.contact.trim()) &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim())
        ) {
            newErrors.contact = "Enter a valid email or 10-digit phone number";
        }

        if (!form.password.trim()) {
            newErrors.password = "Password is required";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
                form.password
            )
        ) {
            newErrors.password =
                "Password must be 8–12 chars, include uppercase, lowercase, number, and special symbol";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("✅ Account created successfully!");
        }
    };

    return (
        <>
            <TopHeader />
            <NavigationBar />

            <div className="min-h-screen flex flex-col md:flex-row bg-white">

                
                <style>{`
                    input::-ms-reveal,
                    input::-ms-clear {
                        display: none;
                    }
                    input::-webkit-inner-spin-button,
                    input::-webkit-outer-spin-button {
                        display: none !important;
                    }
                `}</style>

                
                <div className="w-full md:hidden flex justify-center bg-white p-6">
                    <img
                        src="src/assets/Side image of login and signup.png"
                        alt="Signup Illustration"
                        className="w-full max-w-xs sm:max-w-sm object-contain"
                        
                    />
                </div>

                
                <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-10">
                    <img
                        src="src/assets/Side image of login and signup.png"
                        alt="Signup Illustration"
                        className="w-7/6 object-contain"
                    />
                </div>

                
                <div className="w-full md:w-1/2 flex items-center justify-center px-5 sm:px-10 py-10">
                    <div className="w-full max-w-md">

                        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
                            Create an account
                        </h1>

                        <p className="text-gray-500 mb-6 text-sm sm:text-base">
                            Enter your details below
                        </p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            
                            
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm sm:text-base"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>

                            
                            <div>
                                <input
                                    type="text"
                                    name="contact"
                                    value={form.contact}
                                    onChange={handleChange}
                                    placeholder="Email or Phone Number"
                                    className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm sm:text-base"
                                />
                                {errors.contact && (
                                    <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 pr-12 text-sm sm:text-base"
                                />

                                <div
                                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>

                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-md text-base sm:text-lg hover:bg-red-600 transition"
                            >
                                <Link to="/Login">Create Account</Link>
                            </button>
                        </form>

                        
                        <button className="w-full mt-4 border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition text-sm sm:text-base">
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            <Link to="">Sign up with Google</Link>
                        </button>

                        
                        <p className="text-center mt-6 text-gray-600 text-sm sm:text-base">
                            Already have an account?
                            <a
                                href="/login"
                                className="text-black font-semibold ml-1"
                            >
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

