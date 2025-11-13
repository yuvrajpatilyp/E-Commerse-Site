import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF ,FaShareNodes} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";  
function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-20">
        
        {/* Exclusive Section */}
        <div>
          <h2 className="font-bold text-2xl mb-3">Exclusive</h2>
          <h2 className="font-bold text-lg mb-3">Subscribe</h2>
          <p className="text-white mb-4 text-sm">Get 10% off your first order</p>

          


<div className="relative flex items-center border border-white rounded px-4 py-2 mr-6">
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-transparent text-white text-sm outline-none w-full pr-8"
  />
  <button
        type="submit"
        className="absolute right-3 text-white hover:text-blue-400 transition duration-300"
        onClick={() => alert("Email sent! ")}
      >
        <FiSend size={15} />
      </button>
</div>

        </div>

        {/* Support Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Support</h2>
          <p className="text-white text-sm leading-6">
            111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
          </p>
          <p className="text-white text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-white text-sm mt-2">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Account</h2>
          <ul className="text-white text-sm space-y-3">
            <li><Link to="/myAccount">My Account</Link></li>
            <li>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
           <h2 className="font-bold text-lg mb-3">Quick Link</h2>
            <ul className="text-white text-sm space-y-3">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
           </div>

        {/* Download App Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Download App</h2>
          <p className="text-gray-300 text-sm mb-2">Save $3 with App New User Only</p>

          <div className="flex items-center space-x-3 mb-4">
            <img src="src/assets/QRCode.png" className="w-20 h-20" />
            <div className="flex flex-col space-y-2">
              <img src="src/assets/Googleplay.png" className="w-28" />
              <img src="src/assets/Appleappstore.png" className="w-28" />
            </div>
          </div>
           <div className="flex justify-center gap-6 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
              <FaFacebookF />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors duration-300">
                        <FaTwitter />
                      </a>
                      <a href="https://instagram.com"target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                        <FaInstagram />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedinIn />
                      </a>
                      
                    </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 pt-4">
        © Copyright Starsoftech 2025. All right reserved
      </div>
    </footer>
  );
}

export default Footer;