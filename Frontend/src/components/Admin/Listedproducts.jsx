import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Listedproducts = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('role');
navigate('/login')
    
}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product`);
        setProducts(response.data.getdata);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
    <aside
    className={`fixed z-40 top-0 left-0 w-[85%] md:w-[250px] h-full  bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out
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

      {/* Overlay for mobile */}
     {isOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}

      {/* Main Content */}
    <div className="flex-1 ml-0  ">
    {/* Mobile Topbar */}
    <div className=  " bg-gray-900 text-white flex justify-between items-center p-4 md:hidden">
      <h2 className="text-xl font-bold">SB Leather Goods</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
        {/* Topbar on mobile */}
       

        {/* Main grid content */}
    <div className="p-4 h-full flex flex-col">
  <h1 className="text-3xl text-gray-900 font-bold text-center mb-4">Listed Products</h1>

  {/* Scrollable Product Grid */}
  <div className="flex-1 overflow-y-auto pr-2">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img
            src={hoverIndex === index ? item.image[1] : item.image[0]}
            alt={item.pname}
            className="w-full h-60 object-cover transition duration-300"
          />

          <div className="p-4 text-center">
            <div className="flex justify-center items-center space-x-1 text-yellow-500 text-sm">
              {Array(5).fill().map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.5 12.18 1 8.545l6.09-.89L10 2l2.91 5.655 6.09.89-4.5 3.636 1.378 5.91z" />
                </svg>
              ))}
              <span className="text-gray-600 text-xs ml-2">93 reviews</span>
            </div>
            <h3 className="uppercase mt-2 text-sm font-semibold text-gray-800">{item.pname}</h3>
            <p className="text-gray-600 mt-1">RS. {item.price} PKR</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Listedproducts;
