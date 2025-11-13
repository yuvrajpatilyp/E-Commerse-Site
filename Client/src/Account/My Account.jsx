import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import NavigationBar from "../Reusable/NavigationBar";
import PageNavigator from "../Reusable/PageNavigator";
import TopHeader from "../Reusable/TopHeader";

function AccountPage() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [selected, setSelected] = useState("My Profile");
  const [showPass, setShowPass] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  
  const resetChanges = () => {
    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
    setPasswords({ old: "", new: "", confirm: "" });
    setErrors({ email: "", password: "", confirmPassword: "" });
    alert("Changes cancelled!");
  };


  const toggleShow = (field) => {
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!emailRegex.test(info.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!passwordRegex.test(passwords.new)) {
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
      valid = false;
    }

    if (passwords.new !== passwords.confirm) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  
  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Profile Updated ");
    } else {
      alert("Please fix the errors before submitting ");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 px-3 sm:px-6 font-sans">
      <TopHeader />
      <NavigationBar />

      
      <div className="w-full sm:w-11/12 md:w-4/5 mt-4 mb-2">
        <PageNavigator page="My Account" />
      </div>

      
      <div className="w-full sm:w-11/12 md:w-4/5 flex flex-col md:flex-row gap-6">
       
        <div className="md:w-1/4 border border-gray-200 rounded-lg p-4 sm:p-5 bg-gray-50 text-sm shadow-sm">
          <h2 className="text-gray-900 font-semibold mb-2">Manage My Account</h2>
          <ul className="space-y-1 mb-4 text-gray-600">
            {["My Profile", "Address Book", "My Payment Options"].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelected(tab)}
                className={`cursor-pointer px-2 py-1 rounded-md ${
                  selected === tab
                    ? "text-red-500 font-semibold bg-red-50"
                    : "hover:text-red-500"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          <h2 className="text-gray-900 font-semibold mb-2">My Orders</h2>
          <ul className="space-y-1 mb-4 text-gray-600">
            {["My Returns", "My Cancellations"].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelected(tab)}
                className={`cursor-pointer px-2 py-1 rounded-md ${
                  selected === tab
                    ? "text-red-500 font-semibold bg-red-50"
                    : "hover:text-red-500"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>

          <h2 className="text-gray-900 font-semibold mb-2">My Wishlist</h2>
          <ul className="space-y-1 text-gray-600">
            <li
              onClick={() => setSelected("Wishlist")}
              className={`cursor-pointer px-2 py-1 rounded-md ${
                selected === "Wishlist"
                  ? "text-red-500 font-semibold bg-red-50"
                  : "hover:text-red-500"
              }`}
            >
             
            </li>
          </ul>
        </div>

       
        <div className="flex-1 border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
          {selected === "My Profile" ? (
            <>
              <h3 className="text-red-500 font-semibold mb-5 sm:mb-6 text-base sm:text-lg">
                Edit Your Profile
              </h3>

              <form onSubmit={submitForm} className="space-y-6">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Email", name: "email" },
                    { label: "Address", name: "address" },
                  ].map(({ label, name }) => (
                    <div key={name}>
                      <label className="text-sm text-gray-700 mb-1 block">
                        {label}
                      </label>
                      <input
                        name={name}
                        value={info[name]}
                        onChange={handleInput}
                        type={name === "email" ? "email" : "text"}
                        className={`w-full border rounded-md px-3 py-2 bg-gray-50 focus:ring ${
                          errors.email && name === "email"
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-300 focus:ring-red-200"
                        }`}
                      />
                      {errors.email && name === "email" && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    Password Changes
                  </h4>

                  {[
                    { key: "old", label: "Current Password" },
                    { key: "new", label: "New Password" },
                    { key: "confirm", label: "Confirm New Password" },
                  ].map(({ key, label }) => (
                    <div className="relative mb-3" key={key}>
                      <input
                        type={showPass[key] ? "text" : "password"}
                        name={key}
                        value={passwords[key]}
                        onChange={handlePasswordChange}
                        placeholder={label}
                        className={`w-full border rounded-md px-3 py-2 bg-gray-50 focus:ring ${
                          (errors.password && key === "new") ||
                          (errors.confirmPassword && key === "confirm")
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-300 focus:ring-red-200"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => toggleShow(key)}
                        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                      >
                        {showPass[key] ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>

                     
                      {errors.password && key === "new" && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.password}
                        </p>
                      )}
                      {errors.confirmPassword && key === "confirm" && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    type="button"
                    onClick={resetChanges}
                    className="px-4 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center text-gray-700 py-10">
              <h3 className="text-lg font-semibold">{selected}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Content for "{selected}" will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}

export default AccountPage;
