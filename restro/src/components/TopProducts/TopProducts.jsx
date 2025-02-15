import React from "react";
import img1 from "../../assets/casual.png";
import img2 from "../../assets/printed.png";
import img3 from "../../assets/women.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas",
  },
  {
    id: 2,
    img: img2,
    title: "Printed Shirt",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas",
  },
  {
    id: 3,
    img: img3,
    title: "Women Shirt",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="mx-auto">
        {/* header section */}
        <div className="text-left mb-24 lg:px-13 md:px-13 mx-auto">
          <p data-aos="fade-up" className="text-amber-600 text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            veniam qui. Reprehenderit impedit qui iusto id ipsam ratione ex non
            debitis
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-gray-200  hover:bg-black/80  hover:text-white relative shadow-amber-50 duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[150px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text bg-yellow-500" />
                  <FaStar className="text bg-yellow-500" />
                  <FaStar className="text bg-yellow-500" />
                  <FaStar className="text bg-yellow-500" />
                  <FaStar className="text bg-yellow-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button className="bg-amber-300 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-300 cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
