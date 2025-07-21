import React from 'react';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import facebookIcon from "../../assets/Images/facebook.svg";
import InstagramIcon from "../../assets/Images/instagram.svg";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 mt-[100px] border-[1px]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About the Shop */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
            About the Shop
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            At SB, a discerning clientele can choose from a wide variety of premium
            leather products in Pakistan and abroad. Be it a routine every-day item, a
            high-fashion accessory or a business essential, we strive to offer something
            for everyone.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-black">
             <img src={facebookIcon} alt="" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
          <img src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Information
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">Stores</a></li>
            <li><a href="#" className="hover:text-black">Track Your Order</a></li>
            <li><a href="#" className="hover:text-black">Refund & Exchange Policy</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms and Services</a></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Our Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to receive regular updates, access to exclusive offers, and more.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
                <button className=" relative mt-2 px-8 py-2 text-black  text-sm font-medium overflow-hidden group border border-[#ffd270] bg-transparent">
  <span className="absolute inset-0 bg-[#ffd270] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
  <span className="relative z-10  group-hover:text-[#ffd270] transition-colors duration-500">
      SUBSCRIBE
  </span>
</button>

            
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
