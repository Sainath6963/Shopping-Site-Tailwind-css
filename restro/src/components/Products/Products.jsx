import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "women Ethic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "women western",
    rating: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Google",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed T-shirt",
    rating: 5.0,
    color: "white",
    aosDelay: "600",
  },
  {
    id: 5,
    img: img5,
    title: "Fashion T-shirt",
    rating: 5.0,
    color: "white",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="mx-auto">
        {/* header section */}
        <div className=" text-center mb-10 max-w-[700px]  mx-auto">
          <p data-aos="fade-up" className="text-amber-600 text-primary">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            veniam qui. Reprehenderit impedit qui iusto id ipsam ratione ex non
            debitis
          </p>
        </div>

        {/* body section */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 "
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[200px] w-[200px] oject-cover rounded-br-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 ">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
