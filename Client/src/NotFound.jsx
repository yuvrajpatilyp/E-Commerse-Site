import NavigationBar from "./Reusable/NavigationBar";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white text-black">
      <NavigationBar />
      
      <div className="flex flex-col items-center mt-24 mb-32">
        <h1 className="text-6xl font-semibold">404 Not Found</h1>
        <p className="text-gray-500 mt-4">
          Your visited page not found. You may go home page.
        </p>

        <a href="/" className="mt-8">
          <button className="bg-red-500 text-white px-6 py-3 rounded">
            Back to home page
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 pb-6 px-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Exclusive */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Exclusive</h3>
            <p>Subscribe</p>
            <p className="text-gray-400 text-sm mt-1">Get 10% off your first order</p>

            <div className="flex mt-4 border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black px-3 py-2 outline-none text-sm flex-1"
              />
              <button className="border-l border-gray-600 px-4 hover:bg-gray-700 transition">
                →
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Support</h3>
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p className="mt-3 text-gray-400 text-sm">exclusive@gmail.com</p>
            <p className="text-gray-400 text-sm">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Account</h3>
            <p className="hover:text-gray-300 cursor-pointer">My Account</p>
            <p className="hover:text-gray-300 cursor-pointer">Login / Register</p>
            <p className="hover:text-gray-300 cursor-pointer">Cart</p>
            <p className="hover:text-gray-300 cursor-pointer">Wishlist</p>
            <p className="hover:text-gray-300 cursor-pointer">Shop</p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Link</h3>
            <p className="hover:text-gray-300 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-gray-300 cursor-pointer">Terms Of Use</p>
            <p className="hover:text-gray-300 cursor-pointer">FAQ</p>
            <p className="hover:text-gray-300 cursor-pointer">Contact</p>
          </div>

          {/* Download App */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Download App</h3>
            <p className="text-gray-400 text-sm">Save $3 with App New User Only</p>

            <div className="flex space-x-3 mt-3">
              <img
                src="https://i.postimg.cc/V6YwqzVx/qr.png"
                alt="QR"
                className="w-20 h-20"
              />
              <div className="flex flex-col space-y-2">
                <img
                  src="https://i.postimg.cc/6Q0QfJtM/google.png"
                  alt="Google Play"
                  className="h-8"
                />
                <img
                  src="https://i.postimg.cc/J4kDmRsm/appstore.png"
                  alt="App Store"
                  className="h-8"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-5 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  );
}
