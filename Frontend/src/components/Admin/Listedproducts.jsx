import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PopupInput from '../POPedit/POP';
import { Slide, toast, ToastContainer } from 'react-toastify';

const Listedproducts = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
     const [ispopup, setIspopup] = useState(false);

const [selectedProduct, setSelectedProduct] = useState({
  _id: '',
  pname: '',
  price: '',
  category: '',

});

  const navigate = useNavigate();
    const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('role');
navigate('/login')
    
}

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product`);
        setProducts(response.data.getdata);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  useEffect(() => {
    fetchProducts();
  }, []);

////editbtn
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  console.log(selectedProduct)
};

const Editbtn = async(id)=>{
  console.log("edit" ,id)
  const product = products.find((p) => p._id === id);
  // console.log(product)
  if (product) {
    setSelectedProduct(product);
    setIspopup(true);
  }
console.log(selectedProduct)

}

// edit new form 
const handleEditSubmit = async (e) => {
  e.preventDefault();
  try {
    const newdata = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/product/${selectedProduct._id}`, selectedProduct);
    
    fetchProducts();
    setIspopup(false);
    
toast.success(newdata?.data?.message, {
position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
  } catch (err) {
    
toast.error(err?.data?.message, {
position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
    console.error('Edit error:', err.message);
  }
};



const deletebtn =async (id)=>{
  console.log("deletebtn",id)
    try {
     const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/product/${id}`);
console.log(res)

fetchProducts()

toast.success(res?.data?.message, {
position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
  } catch (err) {
    
toast.error(err?.message, {
position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
       console.error('Delete error:', err.response?.data || err.message);
  }
}



  return (
 <>
  <ToastContainer />
 
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
          <div className='flex justify-around'>

{/* Edit Modal Popup */}
{ispopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5">
    <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Edit Product</h2>
      <form onSubmit={handleEditSubmit} className="space-y-4">
        <input
          type="text"
          name="pname"
          value={selectedProduct.pname}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          value={selectedProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
        />
        {/* <input
          type="text"
          name="category"
          value={selectedProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
        /> */}
         <select
value={selectedProduct.category}
          onChange={handleInputChange}
    name="category"
    className="w-full font-bold text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
    required
  >
    <option value="" disabled>Select Category</option>
    <option value="menswallet">Men's Wallet</option>
    <option value="ladieswallet">Ladies Wallet</option>
    <option value="bags">Bags</option>
    <option value="ladiesbags">Ladies Bags</option>
    <option value="gifts">Gifts</option>
    <option value="cardholder">Card Holder</option>
    <option value="keychain">Keychain</option>
  </select>
     

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
         
            onClick={()=>setIspopup(false)}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}


       <button  onClick={()=>{Editbtn(item._id)
        setIspopup(true)
       }}  className="w-[100px] bg-green-500 mb-3 font-semibold text-white py-1 rounded-md hover:bg-green-600 transition" >
        Edit Card </button>
           <button onClick={()=>deletebtn(item._id)} className="w-[100px] bg-red-500 mb-3 font-semibold  text-white py-1 rounded-md hover:bg-red-600 transition" >
        DELETE </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div></>
  );
};

export default Listedproducts;
