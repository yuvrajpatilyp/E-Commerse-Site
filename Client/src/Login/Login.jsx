import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    identifier: "",
    password: "",
  });

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,12}$/;

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const validate = () => {
    let valid = true;
    let newErrors = { identifier: "", password: "" };

    
    if (!form.identifier) {
      newErrors.identifier = "Email or Mobile Number is required.";
      valid = false;
    } else if (
      !emailRegex.test(form.identifier) &&
      !mobileRegex.test(form.identifier)
    ) {
      newErrors.identifier =
        "Invalid Email or 10-digit Mobile Number.";
      valid = false;
    }

    
    if (!form.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be 8-12 chars, include uppercase, lowercase, digit, and special character.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Validation Passed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10">

        
        <div className="hidden md:block">
          <img
            src="src/assets/Side image of login and signup.png"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="identifier"
              placeholder="Email or Phone Number"
              value={form.identifier}
              onChange={handleChange}
              className="border-b border-gray-300 w-full py-2 mb-2 focus:outline-none"
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mb-4">{errors.identifier}</p>
            )}

            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="border-b border-gray-300 w-full py-2 mb-2 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">{errors.password}</p>
            )}

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600"
              >
                Log In
              </button>

              <button type="button" className="text-red-500 hover:underline">
                Forget Password?
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
