import React, { useEffect, useState } from 'react';
import deleivery from '../../assets/Images/bus.svg';

// import cardimg1 from '../../assets/Images/Img1.webp';
// import cardimg2 from '../../assets/Images/Img2.webp';
// import cardimg3 from '../../assets/Images/Img3.webp';
// import cardimg4 from '../../assets/Images/Img4.webp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetail = () => {
 const { id } = useParams();
const [productFind ,setProductFind ] = useState(null)
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [engraving, setEngraving] = useState(false);
    const [text, setText] = useState('');
  const [font, setFont] = useState('Roboto Condensed Bold');
  const [fontColor, setFontColor] = useState('Silver');
const navigate = useNavigate();

  // const images = [
  // {
  //     img: cardimg1,
  
  //   },
  //     {
  //         img: cardimg2,
       
  //       },
  //         {
  //             img: cardimg3,
             
  //           },
  //            {
  //             img: cardimg4,
             
  //           },
  // ];





useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/${id}`);
      const findpro = response.data?.product;

      console.log("API Response:", response.data);
      console.log("Product Object:", findpro);

      setProductFind(findpro); 
      console.log(productFind)
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchProduct();
}, [id]);

  if (!productFind) return <div className="p-4 text-center">Loading...</div>;



////dymic date deleivery 

  // Helpe to format date as "Day, Month Date"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const today = new Date();
  const minDelivery = new Date(today);
  minDelivery.setDate(today.getDate() + 3);

  const maxDelivery = new Date(today);
  maxDelivery.setDate(today.getDate() + 7);



  ////set loaclstorage 
  const detailsengraving ={
    engraving,
    text,
    font,
    fontColor
  }

const handleOrder = (id)=>{
  console.log('hello',id)
  navigate(`/checkout/${id}`)
  localStorage.setItem("qty",quantity)
localStorage.setItem("detailsEngraving", JSON.stringify(detailsengraving));

}

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-8">
      {/* Left Section - Images */}
      <div className="w-full md:w-1/2">
       <img
  src={productFind?.image?.[selectedImg] || cardimg1}
  alt="Selected Wallet"
  className="w-full h-auto border rounded"
/>

        <div className="flex gap-2 mt-4">
          
     {productFind?.image?.length > 0 && (
  <div className="flex gap-2 mt-4">
    {productFind.image.map((imgUrl, index) => (
      <img
        key={index}
        src={imgUrl}
        alt={`thumb-${index}`}
        onClick={() => setSelectedImg(index)}
        className={`w-16 h-16 object-cover border cursor-pointer ${
          selectedImg === index ? 'border-black' : 'border-gray-300'
        }`}
      />
    ))}
  </div>
)}

        
        </div>
      </div>

      {/* Right Section - Info */}
      <div className="w-full md:w-1/2 space-y-4  mt-[80px]">
        <h2 className="text-4xl font-bold">{productFind.pname}</h2>
        <p className="text-yellow-500 text-sm">★★★★★ 67 reviews</p>
        <p className="text-lg text-gray-500 capitalize ">SKU: {productFind.category}</p>
        <p className="text-3xl font-bold">Rs. {productFind.price}.00 PKR</p>

      

        <div className="space-y-2 mr-[90px]">
          <div className="max-w-md mx-auto p-2 bg-white shadow rounded space-y-4">
      <h2 className="text-lg font-semibold">Add Engraving</h2>

      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="engraving"
            value="no"
            checked={!engraving}
            onChange={() => setEngraving(false)}
          />
          <span>No</span>
        </label>
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="engraving"
            value="yes"
            checked={engraving}
            onChange={() => setEngraving(true)}
          />
          <span>Yes</span>
        </label>
      </div>

      {engraving && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter engraving text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Font</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option>Roboto Condensed Bold</option>
              <option>Times New Roman</option>
              <option>Courier New</option>
              <option>Montserrat</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Font Color</label>
            <select
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option>Silver</option>
              <option>Gold</option>
              <option>Black</option>
              <option>White</option>
            </select>
          </div>
        </div>
      )}
    </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 py-1 border rounded"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 py-1 border rounded"
          >
            +
          </button>
        </div>

        <div className="text-sm text-gray-600">
          <p className='flex gap-5 mt-5'>
          <img src={deleivery} alt="Delivery Icon" className="w-5 h-5 " />
      <span>
        Get it between{' '}
        <strong className="font-semibold">{formatDate(minDelivery)}</strong> and{' '}
        <strong className="font-semibold">{formatDate(maxDelivery)}</strong>
      </span>
          </p>
          <p className="mt-2 text-lg text-red-500 font-semibold">
            Engraving orders will not be accepted on Cash on Delivery
          </p>
          <p className="mt-2  text-gray-500">
            <strong>Note:</strong> The actual color of the product may vary slightly from the image.
          </p>
        </div>
         <button onClick={()=>handleOrder(productFind._id)} className=" relative w-full mt-2 px-8 py-3 text-black text-sm font-medium overflow-hidden group border border-[#ffd270] bg-transparent">
  <span className="absolute inset-0 bg-[#ffd270] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
  <span className="relative z-10 uppercase  group-hover:text-[#ffd16e] transition-colors duration-500">
Check Out Order
  </span>
</button>

<button className='bg-green-500 w-full px-8 py-3 text-white font-bold hover:bg-transparent hover:border-2 border-green-500 hover:text-black hover:duration-500  '>ORDER ON WHATSAPP</button>
      </div>
      
    </div>
  );
};

export default ProductDetail;
