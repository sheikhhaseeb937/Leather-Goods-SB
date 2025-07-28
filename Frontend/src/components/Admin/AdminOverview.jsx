import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Home, AddProduct, Orders } from "./pages";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";


const AdminOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('role');
navigate('/login')
    
}
    const barData = [
  { name: 'Jan', sales: 18000 },
  { name: 'Feb', sales: 15000 },
  { name: 'Mar', sales: 20000 },
  { name: 'Apr', sales: 29000 },
];

const pieData = [
  { name: 'Organic', value: 400 },
  { name: 'Referral', value: 300 },
  { name: 'Social', value: 800 },
  { name: 'Email', value: 200 },
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

  return (
<>
<div className="flex min-h-screen w-[100%] items-center bg-gray-100">
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

 <main className=" flex flex-col   items-start min-[300px]:items-center  w-full   ">

  {/* Metrics Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 ">
    {/* Example Card */}
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-sm text-gray-500">BUDGET</h4>
      <p className="text-2xl font-semibold">$24k</p>
      <p className="text-green-500 text-sm">↑ 12% Since last month</p>
    </div>
       <div className="bg-white p-4 rounded shadow">
                    <h4 className="text-sm text-gray-500">TOTAL CUSTOMERS</h4>
                    <p className="text-2xl font-semibold">1.6k</p>
                    <p className="text-red-500 text-sm">↓ 16% Since last month</p>
                  </div>

                    <div className="bg-white p-4 rounded shadow">
                    <h4 className="text-sm text-gray-500">TASK PROGRESS</h4>
                    <p className="text-2xl font-semibold">75.5%</p>
                    <div className="w-full bg-gray-200 rounded h-2 mt-2">
                      <div className="bg-yellow-400 h-2 rounded" style={{ width: '75.5%' }}></div>
                    </div>
                  </div>

                      <div className="bg-white p-4 rounded shadow">
                    <h4 className="text-sm text-gray-500">TOTAL PROFIT</h4>
                    <p className="text-2xl font-semibold">$15k</p>
                  </div>
              
      
    
    {/* Add other cards here */}
  </div>

  {/* Charts Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-4 rounded shadow w-full max-w-[500px] mx-auto">
      <h3 className="text-lg font-medium mb-4">Sales</h3>
      <BarChart width={300} height={200} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#6366F1" />
      </BarChart>
    </div>

    <div className="bg-white p-4 rounded shadow w-full max-w-[500px] mx-auto">
      <h3 className="text-lg font-medium mb-4">Traffic Source</h3>
      <PieChart width={300} height={200}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  </div>
</main>

  </div>
</div>

    
    </>
  )
}

export default AdminOverview
