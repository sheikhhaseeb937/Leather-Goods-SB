import axios from "axios";
import React from "react";

const AdminOrderDetails = ({ order,setOrder }) => {
     console.log(order)
const handleStatus = async (newStatus) => {
  try {
    const res = await axios.put(
      `http://localhost:8000/api/updateStatus/${order._id}`,
      { status: newStatus }
    );

    const updatedOrder = { ...order, status: newStatus }; // or from res.data.data
    alert("Order status updated successfully!");

    setOrder(updatedOrder); // ✅ update parent state

  } catch (error) {
    console.error("Failed to update order:", error);
    alert("Failed to update order status.");
  }
};


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Order View</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer & Shipping Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Customer Info</h2>
              <p className="text-gray-800"><b>Name:</b> {order.firstname} {order.lastname}</p>
              <p className="text-gray-800"><b>Email:</b> {order.email}</p>
              <p className="text-gray-800"><b>Phone:</b> {order.phone}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Shipping Address</h2>
              <p className="text-gray-800">
                {order.address}, {order.optionalPlace}, {order.city}, {order.postalcode}, {order.country}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Order Info</h2>
              <p><b>Order ID:</b> {order._id}</p>
              
              <p><b>Product NAME : </b>  { order.pname}</p>
              <p><b>Product Price : </b>  { order.price}</p>
              <p><b>Product Category : </b>  { order.category}</p>



              <p><b>Created:</b> {new Date(order.createdAt).toLocaleString()}</p>
              <p><b>Status:</b> <span  className={`p-3 capitalize font-bold ${
    order.status === "confirmed"
      ? "text-green-600"
      : order.status === "pending"
      ? "text-yellow-600"
      : order.status === "cancelled"
      ? "text-red-600"
      : "text-gray-600"
  }`}>
                
                {order.status}</span></p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
            <div className="space-y-4 text-gray-800">
              <p><b>Quantity:</b> {order.qty}</p>
              <p><b>Payment Method:</b> {order.payment.toUpperCase()}</p>
              <p><b>Shipping:</b> {order.shipping ? "Yes" : "No"}</p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Engraving Details</h3>
                <p><b>Text:</b> {order.engraving.text}</p>
                <p><b>Font:</b> {order.engraving.font}</p>
                <p><b>Font Color:</b> {order.engraving.fontColor}</p>
              </div>
            </div>

            {/* Admin Actions */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => handleStatus("confirmed")}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Mark as Delivered
              </button>
              <button
                onClick={() => handleStatus("cancelled")}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
