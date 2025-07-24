import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
 
  });
const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
        const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`,{
            email:formData.email,
            password:formData.password
        })
        console.log(response)

        localStorage.setItem("user", JSON.stringify(response.data.user))
  

const role = response.data.user.role
localStorage.setItem('role',role)





        if(response && role === "user"){
const token = response.data.tokenjwt
console.log(token)
localStorage.setItem('token',token)
/////////save role loaclstorage



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

setTimeout(()=>{
navigate('/')
},2000)

}else{
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
 setTimeout(()=>{
navigate('/admin')
},2000)
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
      <div className="max-w-md text-white bg-gray-900 w-full  p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
  
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            required
          />
          
          <button
            type="submit"
            className="w-full  font-bold bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-300 mt-4">
          Already have an account?
          <a  className="text-blue-500 hover:font-bold ml-1">
            <Link to="/signup" >Sig up</Link>
          </a>
        </p>
      </div>
    </div></>
  );
};

export default Login;
