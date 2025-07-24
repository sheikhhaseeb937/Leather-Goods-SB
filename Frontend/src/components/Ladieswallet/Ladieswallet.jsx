import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BasicPagination from '../Pegination/Pegination';

import cardimg1 from '../../assets/Images/ladiesimg/img1.webp';
import cardimghover1 from '../../assets/Images/ladiesimg/imghover1.webp';
import cardimg2 from '../../assets/Images/ladiesimg/img2.webp';
import cardimghover2 from '../../assets/Images/ladiesimg/imghover2.webp';
import cardimg3 from '../../assets/Images/ladiesimg/img3.webp';
import cardimghover3 from '../../assets/Images/ladiesimg/imghover3.webp';
import cardimg4 from '../../assets/Images/ladiesimg/img4.webp';
import cardimghover4 from '../../assets/Images/ladiesimg/imghover4.webp';
import cardimg5   from '../../assets/Images/ladiesimg/img5.jpg';
import cardimghover5 from '../../assets/Images/ladiesimg/imghover5.webp';
import cardimg7   from '../../assets/Images/ladiesimg/img7.webp';
import cardimghover7 from '../../assets/Images/ladiesimg/imghover7.webp';
import cardimg8   from '../../assets/Images/ladiesimg/img8.webp';
import cardimghover8 from '../../assets/Images/ladiesimg/imghover8.webp';
import axios from 'axios';

const Ladieswallet = () => {
    const [products, setProducts] = useState([]);
  const cardsitems = [
    {
      img: cardimg1,
      hover: cardimghover1,
      text: 'Timeless - Black',
      price: '2,130.00',
    },
      {
      img: cardimg2,
      hover: cardimghover2,
      text: 'Hunt -Black',
      price: '3,130.00',
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

    {
      img: cardimg7,
      hover: cardimghover7,
      text: 'Timeless - Black',
      price: '2,130.00',
    },
    {
      img: cardimg8,
      hover: cardimghover8,
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

  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = products.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product`);
// console.log(response)
const productgets = response.data.getdata

   const ladieswallet = productgets.filter(
        (product) => product.category === 'ladieswallet'
      );
        setProducts(ladieswallet);
     
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <h1 className='text-center font-bold text-4xl p-4 text-[#303030] font-serif mt-10'>LADIES WALLETS</h1>
        <p className='text-center  text-[#303030]'>
         Versatile wallets curated with special attention to detail and no compromise on style
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[300px] mx-auto"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
                          <img
               src={
  hoverIndex === index
    ? item.image[1] || item.image[0]
    : item.image[0]
}
                alt={item.text}
                className="w-full  h-[300px] object-contain  transition duration-300"
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
      </div>

      <BasicPagination count={pageCount} page={page} handleChange={handleChange} />

      <Footer />
    </div>
  );
};

export default Ladieswallet;
