import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import PageNavigator from "../Reusable/PageNavigator";


function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "name" && !nameRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        name: "Name must contain only alphabets",
      }));
    } else if (name === "email" && !emailRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email address (e.g., abc23@gmail.com)",
      }));
    } else if (name === "phone" && !phoneRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be 10 digits only",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!nameRegex.test(form.name))
      newErrors.name = "Name must contain only alphabets";
    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address (e.g., abc23@gmail.com)";
    if (!phoneRegex.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits only";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please correct the highlighted errors before submitting.");
      return;
    }

    alert("Your message has been sent successfully!");
    console.log("Form Submitted:", form);

    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
     <PageNavigator page ="Contact" />
      <section className="grid md:grid-cols-3 gap-8">
        {/* Left Info Box */}
        <div className="md:col-span-1 bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Call To Us  */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-400 p-2 rounded-full">
                <Phone className="text-white w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Call To Us</h2>
            </div>
            <p className="text-gray-600 text-6m mt-5">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 text-6m mt-2">
              Phone: +8801611112222
            </p>
          </div>

          {/* Gray line between sections */}
          <hr className="border-t-2 border-gray-200 my-2" />

          {/* Write To Us */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-red-400 p-2 rounded-full">
                <Mail className="text-white w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 ">Write To Us</h2>
            </div>
            <p className="text-gray-600 text-6m mt-5">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 text-6m mt-2">
              Emails:customer@exclusive.com
            </p>
            <p className="text-gray-600 text-6m mt-2">
              Emails:support@exclusive.com</p>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-gray-100 px-3 pt-7 pb-3 text-gray-900 rounded focus:outline-none ${
                    errors.name ? "ring-1 ring-red-500" : ""
                  }`}
                  required
                />
                <label
                  className="absolute left-3 top-2.5 text-gray-500 text-base transition-all duration-200 ease-in-out
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
                >
                  Your Name *
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-gray-100 px-3 pt-7 pb-3 text-gray-900 rounded focus:outline-none ${
                    errors.email ? "ring-1 ring-red-500" : ""
                  }`}
                  required
                />
                <label
                  className="absolute left-3 top-2.5 text-gray-500 text-base transition-all duration-200 ease-in-out
                    peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
                >
                  Your Email *
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-gray-100 px-3 pt-7 pb-3 text-gray-900 rounded focus:outline-none ${
                    errors.phone ? "ring-1 ring-red-500" : ""
                  }`}
                  required
                />
                <label
                  className="absolute left-3 top-2.5 text-gray-500 text-base transition-all duration-200 ease-in-out
                    peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
                >
                  Your Phone *
                </label>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Gray Square QR Box above message */}
           <div className="flex justify-end">
                  <div className="w-24 h-24 bg-gray-100 flex items-center justify-center  shadow">
                 
              </div>
             </div>
            {/* Message Box with Scrollbar */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder=" "
                className="peer w-full bg-gray-100 px-3 pt-7 pb-3 text-gray-900 rounded focus:outline-none resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              ></textarea>
              <label
                className="absolute left-3 top-2.5 text-gray-500 text-base transition-all duration-200 ease-in-out
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
              >
                Your Message
              </label>
            </div>

            {/* Conditional Send Message Button */}
            {form.message.trim() && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
