import React, { useState } from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';
import { Slide, toast, ToastContainer } from "react-toastify";

const AddProduct = () => {

const [image , setImage] = useState([])
  const [productData, setProductData] = useState({
    pname: "",
    price: "",
    category: "",
 
  });


  const handleChange = (e) => {

    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
console.log(productData)


const handleFiles = (e)=>{


  const selectedFiles = Array.from(e.target.files);
console.log(selectedFiles)
setImage(selectedFiles)
  if (selectedFiles.length > 2) {
    alert("You can only upload up to 2 images.");
   setImage([])
    return;
  }



}




const handleSubmit = async (e)=>{
   e.preventDefault();
try {

  const ImgUrl = new FormData();

    image.forEach((img) => {
      console.log(img)
      ImgUrl.append("images", img); 
    });
 const responseImg = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/productimg`,
      ImgUrl,
  
    );

    console.log("Uploaded Image Response:", responseImg);
if(responseImg){
toast.success(responseImg?.data?.message, {
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
}else{
  toast.error(error?.message, {
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
}


      const sendProductData = {
  pname: productData.pname,
  price: productData.price,
  category: productData.category,
  image: responseImg.data.imageUrls,
};

console.log("Send Product Data:", JSON.stringify(sendProductData, null, 2));
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/product`, sendProductData);
console.log(response);

if(response){

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

}else{
  toast.error(error?.message, {
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
}


} catch (error) {
    toast.error(error?.message, {
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


}

    // Clear form
      setProductData({ pname: "", price: "", category: "" });
      setImage([]);

}

  return (
    
<>
 <ToastContainer />
    <div className="flex flex-col  lg:flex-row w-full  min-h-screen">
      {/* Sidebar */}
  
      <div className="w-full lg:w-[20%] h-auto lg:h-screen border-b lg:border-b-0 border-gray-200">
        <AdminNav />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-[80%] flex justify-center items-center lg:items-center p-4 lg:p-0">
        <div className="w-full bg-gray-900 max-w-2xl p-6 text-white border border-gray-200 rounded-3xl shadow-md mt-4 lg:mt-0">
          <h1 className="text-center mb-6 font-bold text-2xl lg:text-3xl">ADD PRODUCT</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold">Product Name</label>
              <input
            
              
                value={productData.pname}
                onChange={handleChange}
                type="text"
                name="pname"
                placeholder="Product Name"
                className="w-full font-bold  text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Product Price</label>
              <input
              
value={productData.price}
     onChange={handleChange}
                type="text"
                name="price"
                placeholder="Price"
                className="w-full font-bold  text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Category</label>
 <select
    value={productData.category}
    onChange={handleChange}
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





            </div>

            <div>
              <label className="block mb-1 font-semibold">Product Images</label>
       <input
        onChange={handleFiles}
  type="file"
  name="images"
  className="w-full font-bold text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
  required
  accept="image/*"
  multiple
/>
            </div>

            <button 
           
              type="submit"
              className="w-full bg-gray-500 font-bold text-white py-2 rounded-md hover:bg-gray-600 transition"
            >
              List Product
            </button>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default AddProduct;
