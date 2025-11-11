import React from "react";
//import NavigationBar from './Reusable/NavigationBar'


export default function Signup() {
    return (
        <div className="min-h-screen flex bg-white">
            {/* <NavigationBar/> */}
            
            
            <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
                <img
                    src="src/assets/Side image of login and signup.png"
                    alt="Shopping Illustration"
                    className="w-3/4 object-contain"
                />
            </div>

            
            <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
                    <p className="text-gray-500 mb-6">Enter your details below</p>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                        />
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                        />

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-3 rounded-md text-lg hover:bg-red-600 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <button className="w-full mt-4 border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign up with Google
                    </button>

                    <p className="text-center mt-6 text-gray-600">
                        Already have account?
                        <a href="/login" className="text-black font-semibold ml-1">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
