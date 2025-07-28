import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";

const CheckoutPage = () => {
 const { id } = useParams();
  const [quantity , setQuantity] = useState(1)
  const [engr, setEngr] = useState(false);

 const [checkproduct , setCheckproduct] = useState(null)


  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

const navigate = useNavigate();


useEffect(() => {
  const savedQty = localStorage.getItem("qty");
  if (savedQty) {
    setQuantity(parseInt(savedQty));
  }

  const savedEngraving = localStorage.getItem("detailsEngraving");
  if (savedEngraving) {
    try {
      const parsed = JSON.parse(savedEngraving);
      setEngr(parsed);
    } catch (error) {
      console.error("Invalid JSON in localStorage for detailsEngraving:", error);
    }
  }
}, []);

console.log(engr)
console.log(paymentMethod)
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",  
    phone: "",
    address: "",
    optionalPlace: "",
    city: "",
    postalcode: "",
    country: "Pakistan",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

    console.log(formData)


useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/${id}`);
      const checkOrder = response.data?.product;

console.log(checkOrder)
    
setCheckproduct(checkOrder)
    

    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchProduct();
}, [id]);

    if (!checkproduct) return <div className="p-4 text-center">Loading...</div>;

// 

// console.log(savedData);
const handleSubmit = async () => {
  const data = {
    ...formData,
    qty: quantity,
    engraving:engr,
   payment:  paymentMethod,
  shipping: billingSameAsShipping,
   
  
  };

  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ordernow`, data);
    console.log("Order placed successfully:", response);
    if(response.data){
       toast.success(response?.data?.message, {
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
 setFormData({});

localStorage.removeItem("qty")
localStorage.removeItem("detailsEngraving")
setTimeout(() => {
  navigate('/')
}, 2000);


    }
   
  } catch (error) {
           toast.error(response?.data?.message, {
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

    console.error("Order failed:", error.response?.data || error.message);
  }
};



  return (
 <>
   <ToastContainer />
 
    <div className=" bg-white min-h-screen p-4">
        <h1 className="text-center font-bold text-5xl ">SB</h1>
        <p className="text-center  text-2xl ">Leather Goods</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Form */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <input
       
  type="email"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange} 
 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/>
          </div>

          <div>
            <h2 className=" text-2xl font-bold mb-4 ">Delivery</h2>
            <div className="space-y-4">
<select
  name="country" // <-- Add this
  value={formData.country}
  onChange={handleChange} // <-- use onChange, not onClick
  className="w-full p-4 border-2 rounded-lg"
>
  <option value="">Select Country</option>
  <option value="Pakistan">Pakistan</option>
</select>
              <div className="grid grid-cols-2 gap-4">
            <input
  type="text"
  name="firstname"
 placeholder="First name (optional)"
  value={formData.firstname}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/>
                <input
  type="text"
  name="lastname"
  placeholder="Last name"
  value={formData.lastname}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/>          
              </div>
                        <input
  type="text"
  name="address"
  placeholder="Adress"
  value={formData.address}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/>    
             <input
  type="text"
  name="optionalPlace"
  placeholder="Apartment, suite (optional)"
  value={formData.optionalPlace}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/> 

              {/* <input name="address" value={formData.address} onClick={handleChange}        placeholder="Address" className="w-full p-4 border-2 rounded placeholder:text-black" /> */}
              {/* <input name="optionalPlace" value={formData.optionalPlace}  onClick={handleChange}  placeholder="Apartment, suite (optional)" className="w-full p-4 border-2 rounded placeholder:text-black" /> */}
              <div className="grid grid-cols-2 gap-4">
             <input
  type="text"
  name="city"
  placeholder="City"
  value={formData.city}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/> 
             <input
  type="text"
  name="postalcode"
  placeholder="Postal Code"
  value={formData.postalcode    }
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/> 
                
                {/* <input name="city" value={formData.city} onClick={handleChange}        placeholder="City" className="p-4 border-2 rounded placeholder:text-black" /> */}
                {/* <input name="postalcode" value={formData.postalcode}  onClick={handleChange} placeholder="Postal code (optional)" className="p-4 border-2 rounded placeholder:text-black" /> */}
              </div>
                           <input
  type="text"
  name="phone"
  placeholder="Phone No"
  value={formData.phone}
  onChange={handleChange} 
  className="w-full p-4 border-2 rounded placeholder:text-black"
/> 
 
              {/* <input  name="phone" value={formData.phone} onClick={handleChange}       placeholder="Phone" className="w-full p-4 border-2 rounded placeholder:text-black" /> */}
              <label className="inline-flex items-center space-x-2 mt-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Save this information for next time</span>
              </label>
            </div>
          </div>
              <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Payment</h2>
        <p className="text-sm text-gray-500 mb-4">
          All transactions are secure and encrypted.
        </p>

        <div className="space-y-4">
          {/* COD */}
          <label className="flex items-start gap-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mt-1"
            />
            <span>Cash on Delivery (COD)</span>
          </label>

          {/* PAYFAST */}
          <label className="flex items-start gap-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="payfast"
              checked={paymentMethod === "payfast"}
              onChange={() => setPaymentMethod("payfast")}
              className="mt-1"
            />
            <div className="flex flex-col">
              <span>PAYFAST (Pay via Debit/Credit/Wallet/Bank Account)</span>
              <div className="flex gap-2 mt-1">
                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-6 h-6" />
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="w-6 h-6" />
              </div>
            </div>
          </label>

          {/* Bank Deposit */}
          <label className="flex flex-col border p-3 rounded cursor-pointer space-y-2">
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="mt-1"
              />
              <span className="font-medium">Bank Deposit</span>
            </div>

            {paymentMethod === "bank" && (
              <div className="text-sm text-gray-700 ml-6">
                <p className="mb-1">After placing your order, please make a payment via Online Transfer/Bank Deposit to:</p>
                <ul className="mb-2">
                  <li><strong>Bank:</strong> Bank Alfalah Ltd Islamic Banking</li>
                  <li><strong>Title of Account:</strong> SB Brands</li>
                  <li><strong>Account Number:</strong> 9553652653565</li>
                </ul>
                <p className="mb-1">
                  (After payment, please email the copy of your deposit slip on <strong>customercare@SB.com.pk</strong> or via WhatsApp at <strong>03150006458</strong> along with your order number)
                </p>
                <p>All prices are inclusive of 18% GST</p>
              </div>
            )}
          </label>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Billing address</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              checked={billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(true)}
            />
            <span>Same as shipping address</span>
          </label>

          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              checked={!billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(false)}
            />
            <span>Use a different billing address</span>
          </label>
        </div>
      </div>

      {/* Complete Order Button */}
      <div className="pt-4">
        <button onClick={handleSubmit} className="w-full bg-gray-900 text-white py-3 rounded font-bold hover:bg-gray-800 transition">
          Complete order
        </button>
      </div>
    </div>
        </div>
        

        {/* Right Side: Summary */}
       {/* Right Side: Summary */}
<div className="lg:sticky lg:top-4 bg-gray-900 text-white p-6 border-2 border-black rounded-[20px] shadow-md h-[80vh]">
  <div className="flex items-center justify-between mb-4 mt-10">
    <div className="flex items-center gap-2">
      <div className="w-[120px] h-[120px] bg-gray-100 rounded overflow-hidden">
        <img
          src={checkproduct?.image?.[0] || checkproduct?.image?.[1]}
          alt={checkproduct?.title || "Product image"}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="font-medium text-lg">{checkproduct?.pname}</p>
        <p className="text-xs text-white">Engraving: No</p>
      </div>
    </div>
    <p className="font-bold text-lg">Rs {checkproduct?.price?.toLocaleString() || "0.00"}</p>
  </div>

  <div className="flex items-center gap-2 mb-4">
    <input
      type="text"
      placeholder="Discount code"
      className="flex-1 p-2  border rounded outline-none text-black"
    />
    <button className="bg-green-600 text-white font-bold px-4 py-2 rounded">Apply</button>
  </div>

  <div className="border-t pt-4 space-y-2">
    <div className="flex justify-between">
      <span className="font-semibold">Subtotal</span>
      <span className="font-semibold">Rs {checkproduct?.price?.toLocaleString() || "0.00"}</span>
    </div>
       <div className="flex justify-between">
      <span className="font-semibold">Quantity</span>
      <span className="font-semibold">{quantity}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Shipping</span>
      <span className="text-green-600 font-bold">FREE</span>
    </div>
    <div className="flex justify-between font-bold text-lg pt-2 border-t">
      <span className="font-semibold">Total (PKR)</span>
      <span className="font-semibold">Rs {checkproduct?.price?.toLocaleString() * quantity  || "0.00"} -/</span>
    </div>
    <p className="text-sm text-white">
      Including Rs {(checkproduct?.price * 0.15).toFixed(2)} in taxes
    </p>
  </div>
</div>

      </div>
    </div></>
  );
};

export default CheckoutPage;
