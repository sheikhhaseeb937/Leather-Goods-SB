import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminOrderDetails from "./Orders";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const AdminOrdersDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

 const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('role');
navigate('/login')
    
}

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/ordernow`);
        setOrders(res.data.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, []);

  const filterOrders = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    return orders.filter((order) => {
      const createdDate = new Date(order.createdAt);
      const isToday = createdDate.toDateString() === today.toDateString();
      const isYesterday = createdDate.toDateString() === yesterday.toDateString();

      if (filter === "today") return isToday;
      if (filter === "yesterday") return isYesterday;
      if (filter === "confirmed") return order.status === "confirmed";
      if (filter === "pending") return order.status === "pending";
      if (filter === "cancelled") return order.status === "cancelled";
      return true;
    });
  };

  return (
    <div className="flex   flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
<div className="flex  bg-gray-100">
    {/* Fixed Sidebar */}
    <aside className="fixed top-0 left-0 h-screen w-[250px] bg-gray-900 text-white z-40 p-4 hidden lg:block">
      <h2 className="text-2xl font-bold mb-6">SB Leather Goods</h2>
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

    {/* Mobile Sidebar (Drawer) */}
    <div className="w-full lg:hidden ">
      <div className="bg-gray-900 text-white flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">SB Leather Goods</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-In Drawer */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[250px] bg-gray-900 text-white z-50 p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-4 mt-10">
          <Link to="/overview" className="hover:text-purple-400">Overview</Link>
          <Link to="/addproduct" className="hover:text-purple-400">Add Product</Link>
          <Link to="/orders" className="hover:text-purple-400">Orders</Link>
          <Link to="/listedproduct" className="hover:text-purple-400">Listed Product</Link>
          <button onClick={logout} className="bg-green-700 w-[120px] h-[40px] rounded-lg hover:bg-green-800 transition">
            Log Out
          </button>
        </nav>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed  inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>

    {/* Scrollable Main Content */}
    <main className="flex-1 ml-0 lg:ml-[250px]  overflow-y-auto p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* ...Rest of your code (filters, orders, etc.) */}
      </div>
    </main>
  </div>
      {/* Main Content */}
      <div className="flex-1 w-full p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Admin Orders Panel
          </h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 overflow-x-auto">
            {["all", "today", "yesterday", "confirmed", "pending", "cancelled"].map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setSelectedOrder(null);
                }}
                className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                  filter === f ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Orders Table or Detail */}
          {!selectedOrder ? (
            <div className="grid gap-4 sm:gap-6">
              {filterOrders().length > 0 ? (
                <div className="overflow-x-auto rounded-lg bg-white shadow scrollbar-thin">
                  <table className="min-w-[700px] w-full text-sm sm:text-base table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="p-3">#</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterOrders().map((order, idx) => (
                        <tr key={order._id} className="border-b hover:bg-gray-50 transition">
                          <td className="p-3">{idx + 1}</td>
                          <td className="p-3">{order.firstname} {order.lastname}</td>
                          <td className="p-3">{order.email}</td>
                          <td className="p-3">{new Date(order.createdAt).toLocaleString()}</td>
                          <td
                            className={`p-3 capitalize font-bold ${
                              order.status === "confirmed"
                                ? "text-green-600"
                                : order.status === "pending"
                                ? "text-yellow-600"
                                : order.status === "cancelled"
                                ? "text-red-600"
                                : "text-gray-600"
                            }`}
                          >
                            {order.status}
                          </td>
                          <td className="p-3">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="text-sm w-[50px] h-[30px] rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-500">No orders found.</p>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => setSelectedOrder(null)}
                className="mb-4 text-sm rounded-lg h-[40px] w-[150px] text-white font-bold bg-blue-600 hover:bg-blue-800"
              >
                ← Back to Order List
              </button>
              <AdminOrderDetails
                order={selectedOrder}
                setOrder={(updatedOrder) => {
                  setOrders((prev) =>
                    prev.map((o) =>
                      o._id === updatedOrder._id ? updatedOrder : o
                    )
                  );
                  setSelectedOrder(updatedOrder);
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersDashboard;
