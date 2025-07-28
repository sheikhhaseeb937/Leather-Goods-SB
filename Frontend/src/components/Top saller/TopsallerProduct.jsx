import React, { useState } from 'react';
import cardimg1 from '../../assets/Images/wall.webp';
import cardimghover1 from '../../assets/Images/hovercard1.webp';
import cardimg3 from '../../assets/Images/wallet3.webp';
import cardimghover3 from '../../assets/Images/wallethover3.webp';
import cardimg4 from '../../assets/Images/wallet4.webp';
import cardimghover4 from '../../assets/Images/wallethover4.webp';
import cardimg5 from '../../assets/Images/wallet6.webp';
import cardimghover5 from '../../assets/Images/wallethover6.webp';
import { useNavigate } from 'react-router-dom';




const TopsallerProduct = () => {

  const cardsitems = [
    {
      img: cardimg1,
      hover: cardimghover1,
      text: 'Timeless - Black',
      price: '2,130.00',
    },
    {
      img: cardimg3,
      hover: cardimghover3,
      text: 'Hunt -Black',
      price: '3,130.00',
    },
    {
      img: cardimg4,
      hover: cardimghover4,
      text: 'Triune - Black',
      price: '5,899.00',
    },
       {
      img: cardimg5,
      hover: cardimghover5,
      text: 'Grade - Black',
      price: '8,130.00',
    },

  ];

  // Local hover tracking for each card
  const [hoverIndex, setHoverIndex] = useState(null);

const navigate = useNavigate()
  const handleProductdetails =()=>{
navigate('/productdetails')
  }

  return (
    <div onClick={handleProductdetails}>
        <p className='text-center mt-[100px] text-[#303030]'>Featured collection</p>
        <h1 className='text-center font-bold text-4xl p-4 text-[#303030] font-serif'>TOP SELLERS</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 p-4">
      {cardsitems.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[300px] mx-auto"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img
            src={hoverIndex === index ? item.hover : item.img}
            alt={item.text}
            className="w-full  h-[300px] object-cover transition duration-300"
          />
          <div className="p-4 text-center">
            <div className="flex justify-center items-center space-x-1 text-yellow-500 text-sm">
             {Array(5)
              .fill()
              .map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.5 12.18 1 8.545l6.09-.89L10 2l2.91 5.655 6.09.89-4.5 3.636 1.378 5.91z" />
                </svg>
              ))}
              <span className="text-gray-600 text-xs ml-2">93 reviews</span>
            </div>
            <h3 className="uppercase mt-2 text-sm font-semibold text-gray-800">{item.text}</h3>
            <p className="text-gray-600 mt-1">RS. {item.price} PKR</p>
          </div>
        </div>
      ))}
    </div>
<div className='flex justify-center mt-[50px]'>
        <button className=" relative mt-2 px-8 py-2 text-black text-sm font-medium overflow-hidden group border border-[#ffd270] bg-transparent">
  <span className="absolute inset-0 bg-[#ffd270] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
  <span className="relative z-10  group-hover:text-[#ffd270] transition-colors duration-500">
    VIEW ALL PRODUCTS
  </span>
</button>
</div>
    </div>
  );
};

export default TopsallerProduct;
