import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import crown from "../../assets/Images/crown.svg";
import gift from "../../assets/Images/gift.svg";
import bus from "../../assets/Images/bus.svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const navLinks = [
    { name: "Men's Wallets", link: "/mens" },
    { name: "Ladies Wallets", link: "/ladies" },
    { name: "Bags", link: "/bags" },
     { name: "Ladies Bags", link: "/ladiesbags" },
    { name: "Gifts", link: "/gifts" },
    { name: "Card hOlder", link: "/cardsholder" },
    { name: "Keychain", link: "/keychain" },
    { name: "Track Order", link: "/track-order" },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUserInfo(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('qty');
    localStorage.removeItem('detailsEngraving');


    navigate('/login');
  };

  return (
<div>
<p className="bg-black h-8 text-white text-center  font-boldfont-mono text-[0.9rem] p-1">GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE, WITH DELIVERY WITHIN 3-7 DAYS.</p>
      <header className="border-b w-full bg-white">
      {/* Topbar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex justify-center w-full">
          <h1 className="font-serif text-4xl font-bold">SB</h1>
        </div>

        {/* Desktop profile */}
        <div className="hidden lg:flex space-x-6 text-sm uppercase text-gray-700 mr-6">
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 border px-2 py-1 rounded-full hover:bg-gray-100"
            >
              <img
                src={userInfo?.image || `https://ui-avatars.com/api/?name=${userInfo?.name || 'User'}`}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-md z-50">
                <div className="p-4 text-black">
                  <p className="font-bold">{userInfo?.name}</p>
                  <p className="text-sm lowercase">{userInfo?.email}</p>
                </div>
                <hr />
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-lg font-bold text-red-600 hover:bg-[#4d4d4d]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center border-b">
        <ul className="flex space-x-8 py-2 text-md  font-semibold uppercase text-gray-600">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.link} className="relative group text-[#303030]">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-2xl font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col p-4 space-y-4 text-sm font-medium uppercase text-gray-700">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.link}
              onClick={() => setSidebarOpen(false)}
              className="relative group text-[#303030] p-2"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-1/2"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Profile */}
        <div className="p-5 border-t">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-2 border px-2 py-1 rounded-full hover:bg-gray-100"
          >
            <img
              src={userInfo?.image || `https://ui-avatars.com/api/?name=${userInfo?.name || 'User'}`}
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDown className="w-4 h-4" />
          </button>

          {showProfile && (
            <div className="mt-2 w-full bg-white border shadow-lg rounded-md z-50">
              <div className="p-4">
                <p className="font-semibold">{userInfo?.name}</p>
                <p className="text-sm text-gray-500">{userInfo?.email}</p>
              </div>
              <hr />
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Info Boxes */}
      <div className="hidden sm:flex justify-around items-center text-center py-4 text-sm gap-4 h-[100px]">
        <div className="border-r-2 w-[500px] h-full flex flex-col justify-center">
          <img src={crown} alt="Crown" className="mx-auto" />
          <p className="font-bold text-[1.2rem]">25,000+ Loyal Customers</p>
        </div>
        <div className="w-[400px] flex flex-col justify-center">
          <img src={bus} alt="Bus" className="mx-auto" />
          <p className="font-bold text-[1.2rem]">Fast Shipping</p>
        </div>
        <div className="border-l-2 w-[500px] h-full flex flex-col justify-center">
          <img src={gift} alt="Gift" className="mx-auto" />
          <p className="font-bold text-[1.2rem]">Complimentary Gift Packing</p>
        </div>
      </div>
    </header>
</div>
  );
};

export default Navbar;
