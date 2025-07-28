import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BasicPagination from '../Pegination/Pegination';

import cardimg1 from '../../assets/Images/Keychain/k1.webp';
import cardimghover1 from '../../assets/Images/Keychain/k1hover.webp';
import cardimg2 from '../../assets/Images/Keychain/k2.webp';
import cardimghover2 from '../../assets/Images/Keychain/k2hover.webp';
import cardimg3 from '../../assets/Images/Keychain/k3.webp';
import cardimghover3 from '../../assets/Images/Keychain/k3hover.webp';
import cardimg4 from '../../assets/Images/Keychain/k4.webp';
import cardimghover4 from '../../assets/Images/Keychain/k4hover.webp';
import cardimg5 from '../../assets/Images/Keychain/k5.webp';
import cardimghover5 from '../../assets/Images/Keychain/k5hover.webp';
import cardimg6 from '../../assets/Images/Keychain/k6.webp';
import cardimghover6 from '../../assets/Images/Keychain/k6.webp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

















const Keychain = () => {
              const [products, setProducts] = useState([]);
      const {id} =useParams();
         const navigate = useNavigate()
  // const cardsitems = [
  //   {
  //     img: cardimg1,
  //     hover: cardimghover1,
  //     text: 'Timeless - Black',
  //     price: '8,130.00',
  //   },
  //   {
  //     img: cardimg2,
  //     hover: cardimghover2,
  //     text: 'Hunt -Black',
  //     price: '13,130.00',
  //   },
  //   {
  //     img: cardimg3,
  //     hover: cardimghover3,
  //     text: 'Hunt -Black',
  //     price: '23,130.00',
  //   },
  //   {
  //     img: cardimg4,
  //     hover: cardimghover4,
  //     text: 'Triune - Black',
  //     price: '51,899.00',
  //   },
  //   {
  //     img: cardimg5,
  //     hover: cardimghover5,
  //     text: 'Grade - Black',
  //     price: '28,130.00',
  //   },
  
  //   {
  //     img: cardimg6,
  //     hover: cardimghover6,
  //     text: 'Timeless - Black',
  //     price: '62,130.00',
  //   },
   
  //   {
  //     img: cardimg5,
  //     hover: cardimghover5,
  //     text: 'Grade - Black',
  //     price: '18,130.00',
  //   },
  //   {
  //     img: cardimg1,
  //     hover: cardimghover1,
  //     text: 'Timeless - Black',
  //     price: '12,130.00',
  //   },
  //   {
  //     img: cardimg3,
  //     hover: cardimghover3,
  //     text: 'Hunt -Black',
  //     price: '33,130.00',
  //   },
  //   {
  //     img: cardimg4,
  //     hover: cardimghover4,
  //     text: 'Triune - Black',
  //     price: '45,899.00',
  //   },
  //   {
  //     img: cardimg5,
  //     hover: cardimghover5,
  //     text: 'Grade - Black',
  //     price: '88,130.00',
  //   },
  // ];

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
      
         const keychain = productgets.filter(
              (product) => product.category === 'keychain'
            );
              setProducts(keychain);
           
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
      
          fetchProducts();
      
        }, []);
           const handleProductdetails =(id)=>{
      console.log(id)
  navigate(`/product/${id}`)
    }

  return (
    <div>
      <Navbar />

      <div>
        <h1 className='text-center font-semibold text-4xl p-4 text-[#303030] font-serif mt-10'>KEY HOLDERS</h1>
        <p className='text-center  text-[#303030]'>
     Our KEY HOLDERS are designed to keep your essentials secure and organized. 
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-9">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[300px] mx-auto"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
                  onClick={()=>handleProductdetails(item._id)}
            >
                                                                 <img
               src={
  hoverIndex === index
    ? item.image[1] || item.image[0]
    : item.image[0]
}
                alt={item.text}
                className="w-full  h-[300px] object-contain transition duration-300"
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
                <h3 className="uppercase mt-2 text-sm font-semibold text-gray-800">{item.pname}</h3>
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

export default Keychain;
