import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
 
function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-30">
 
        <div>
          <h2 className="font-bold text-2xl mb-3">Exclusive</h2>
          <h2 className="font-bold text-lg mb-3">Subscribe</h2>
          <p className="text-white mb-4 text-sm">Get 10% off your first order</p>
 
          <div className="flex border border-white rounded px-1 py-2 mr-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white text-sm outline-none "
            />
          <button>➤</button>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Support</h2>
          <p className="text-white text-sm leading-6">
            111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
          </p>
          <p className="text-white text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-white text-sm mt-2">+88015-88888-9999</p>
        </div>
 
    
        <div>
          <h2 className="font-bold text-lg mb-3">Account</h2>
          <ul className="text-white text-sm space-y-3">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
 
        <div>
          <h2 className="font-bold text-lg mb-3">Quick Link</h2>
          <ul className="text-white text-sm space-y-3">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
 
        
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
 
          <div className="flex gap-3 mt-5">
            <div className="border border-gray-600 p-2 rounded"><Facebook size={20} /></div>
            <div className="border border-gray-600 p-2 rounded"><Twitter size={20} /></div>
            <div className="border border-gray-600 p-2 rounded"><Instagram size={20} /></div>
            <div className="border border-gray-600 p-2 rounded"><Linkedin size={20} /></div>
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
 
 