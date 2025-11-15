import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TopHeader from "../Reusable/TopHeader";
import NavigationBar from "../Reusable/NavigationBar";
import Footer from "../Reusable/Footer";
import { Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {
      identifier: !form.identifier.trim() && "Username is required",
      password: !form.password.trim() && "Password is required",
    };
    setErrors(newErrors);
    return !newErrors.identifier && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (form.identifier === "admin" && form.password === "admin") {
      alert("Login Successful");
      setIsLoggedIn(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopHeader />
      <NavigationBar />

      
      <div className="flex items-center justify-center grow px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10 lg:gap-16">

          
          <div className="hidden md:flex items-center justify-center">
            <img
              src="src/assets/Side image of login and signup.png"
              alt="Shopping"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          
          <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-8">

            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
              Log in to Exclusive
            </h1>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Enter your details below
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              <InputField
                name="identifier"
                placeholder="Email / Mobile / Username"
                value={form.identifier}
                onChange={handleChange}
                error={errors.identifier}
              />

              <InputField
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                onIconClick={() => setShowPassword(!showPassword)}
              />

              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-4">

                <button
                  type="submit"
                  className="bg-red-500 text-white w-full sm:w-auto px-10 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                >
                  <Link to="/Home Page">Log In</Link>
                  
                </button>

                <button
                  type="button"
                  className="text-red-500 hover:underline cursor-pointer text-sm sm:text-base text-center sm:text-right"
                >
                  <Link to="/">Forget Password?</Link>
                
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function InputField({ error, icon, onIconClick, ...props }) {
  return (
    <div className="relative mb-4">
      <input
        {...props}
        className="border-b border-gray-300 w-full py-2 focus:outline-none appearance-none
                     [&::-ms-reveal]:hidden [&::-ms-clear]:hidden 
                     [&::-webkit-credentials-auto-fill-button]:hidden 
                     [&::-webkit-textfield-decoration-container]:hidden"
      />

      {icon && (
        <div
          className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
          onClick={onIconClick}
        >
          {icon}
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
   </div>
  );
}