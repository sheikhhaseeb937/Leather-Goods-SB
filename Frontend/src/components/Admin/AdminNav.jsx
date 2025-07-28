import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // using lucide icons (or replace with any)

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('role');
navigate('/login')
    
}
  return (
    <div className="relative">
      {/* Top bar with toggle button on mobile */}
      <div className=" bg-gray-900 text-white flex justify-between items-center p-4 md:hidden">
        <h2 className="text-xl font-bold">SB Leather Goods</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 min-h-screen w-full bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-6 hidden md:block">SB Leather Goods</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/overview" className="hover:text-purple-400">Overview</Link>
          <Link to="/addproduct" className="hover:text-purple-400">Add Product</Link>
          <Link to="/orders" className="hover:text-purple-400">Orders</Link>
          <Link to="/listedproduct" className="hover:text-purple-400">Listed Product</Link>
          <button onClick={logout} className="bg-green-700 w-[120px] h-[40px] rounded-lg hover:bg-green-800 transition">
            Log Out
          </button>
     
        
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}


    </div>
  );
};

export default AdminNav;
