import React, { useState } from "react";

export default function Login({ setIsLoggedIn }) {
 
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const mobileRegex = /^[0-9]{10}$/;
//   const passwordRegex =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$/;
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  //  Validation function 
  const validate = () => {
    const newErrors = {};

    
    /*
    if (!form.identifier)
      newErrors.identifier = "Email or Mobile Number is required.";
    else if (!emailRegex.test(form.identifier) && !mobileRegex.test(form.identifier))
      newErrors.identifier = "Invalid Email or 10-digit Mobile Number.";

    if (!form.password)
      newErrors.password = "Password is required.";
    else if (!passwordRegex.test(form.password))
      newErrors.password =
        "Password must be 8-12 chars, include uppercase, lowercase, digit, and special character.";
    */

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Only allow login if username = admin and password = admin
      if (form.identifier === "admin" && form.password === "admin") {
        alert("Login Successful");

        // Update login state in App.jsx (so navbar updates globally)
        setIsLoggedIn(true);
      } else {
        alert("Invalid Username or Password ");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
     

      <div className="flex items-center justify-center flex-grow px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10">

          {/* Left side image */}
          <div className="hidden md:block">
            <img
              src="src/assets/Side image of login and signup.png"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side form section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <InputField
                type="text"
                name="identifier"
                placeholder="Email / Mobile / Username"
                value={form.identifier}
                onChange={handleChange}
                error={errors.identifier}
              />

              {/* Password Input */}
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600"
                >
                  Log In
                </button>

                <button className="text-red-500 hover:underline" type="button">
                  Forget Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🔹 Reusable Input Field component
function InputField({ error, ...props }) {
  return (
    <div>
      <input
        {...props}
        className="border-b border-gray-300 w-full py-2 mb-2 focus:outline-none"
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    </div>
  );
}