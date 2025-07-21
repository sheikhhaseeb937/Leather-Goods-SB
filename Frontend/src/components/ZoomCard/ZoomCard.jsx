import img1 from "../../assets/Images/Img1.webp";
import img2 from "../../assets/Images/Img2.webp";
import img3 from "../../assets/Images/Img3.webp";
import img4 from "../../assets/Images/Img4.webp";
import img5 from "../../assets/Images/Img5.webp";
import img6 from "../../assets/Images/Img6.webp";




const ZoomCard = () => {
  const imges = [
    {
      img:img1,
      TagName :"Men's bags"
    },
     {
      img:img2,
      TagName :"Men's Wallets"
    },
     {
      img:img3,
      TagName :"Ladies wallets"

    },
     {
      img:img4,
      TagName :"Ladies Bags"

    },
     {
      img:img5,
      TagName :"RFID wallets"

    },
     {
      img:img6,
          TagName :"Travel essentials"
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {imges.map((item, index) => (
        <div
          key={index}
          className="relative group w-full overflow-hidden z-10 shadow-lg"
        >
     <div>
      
     </div>
          <img
          
            src={item.img}
            alt="Men's Wallets"
            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-3xl font-bold uppercase tracking-wide">
        {item.TagName}
            </h2>
<button className="relative mt-2 px-4 py-2 text-black text-sm font-medium overflow-hidden group border border-white bg-transparent">
  <span className="absolute inset-0 bg-white transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
    VIEW PRODUCTS
  </span>
</button>


          </div>
        </div>
      ))}
    </div>
  );
};

export default ZoomCard;
