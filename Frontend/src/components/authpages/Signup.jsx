import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";

const Signup = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
 
  });
const [imageUrl , setImageUrl] = useState("")

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleFiles = (e)=>{
console.log(e.target.files[0])
const file = e.target.files[0]
setImageUrl(file)

}

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API call or form validation here

  try {

let imgSaveUrl = ""


  const ImgUrl = new FormData();
  ImgUrl.append("image",imageUrl)



  const responseImg = await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`,ImgUrl)
console.log(responseImg.data.imageUrl)


imgSaveUrl= responseImg.data.imageUrl

 const sendData = ({
      name:formData.name,
      email:formData.email,
      password:formData.password,
      image: imgSaveUrl
    })

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/signup`,sendData)
console.log(response)
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
setTimeout(() => {
    navigate('/login')
}, 2000);
}
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.message, {
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

  };

  return (
    
   <>
     <ToastContainer />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            required
          />
           <input
            type="file"
                accept='image/*'
            
          
onChange={handleFiles}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
           
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <a  className="text-blue-500 hover:underline ml-1">
          
            <Link to="/login">  Log in</Link>
          </a>
        </p>
      </div>
    </div></>
  );
};

export default Signup;
