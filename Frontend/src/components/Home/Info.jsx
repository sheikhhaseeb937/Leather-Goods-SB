import React from 'react';
import leatherImage from '../../assets/Images/info.webp'; // Replace with your actual path

const LeatherSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-7xl mx-auto p-4 gap-6 mt-[100px]">
      {/* Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={leatherImage}
          alt="Leather Craft"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="md:w-1/2 w-full text-center md:text-left mt-[300px]">
        <h2 className="text-xl md:text-2xl font-semibold tracking-widest mb-4 text-gray-800 uppercase">
          For the Love of Leather
        </h2>
        <p className="text-[#303030] leading-relaxed text-sm md:text-base ">
          Our enduring passion for natural leather prompted us to officially launch SB
          in 2001 as a retailer of premium quality leather goods in Pakistan. The
          commitment to stay on the cutting edge is a combination of an innovating
          approach and our long heritage of leather & textile manufacturing, tracing the
          foundation back to a trading house of leather hides set up in the early 1900s.
        </p>
      </div>
    </div>
  );
};

export default LeatherSection;
