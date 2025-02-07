import React from "react";
// import search from "../../assets/search.gif";
import { IoMdSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Ware",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 1,
    name: "Best Selling",
  },
  {
    id: 1,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="bg-emerald-700 py-3 sm:py-0">
        <div className=" container mx-auto flex items-center justify-between px-[40px]">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <h1 className="w-10 uppercase">SB</h1>
            </a>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 cursor-pointer bg-amber-500 "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-red-900 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
                alert("Ordering not available yet");
              }}
              className="bg-gradient-to-r cursor-pointer from-yellow-500 to-blue-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200 cursor-pointer drop-shadow-sm">
                order
              </span>
              <FaCartArrowDown className="text-xl text-white " />
            </button>
            {/* Dark mode */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id} className="">
              <a
                href={data.link}
                className=" inline-block px-4 hover:text-cyan-400 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-blue-400"
            >
              Tranding
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-blue-200 p-2 text-black">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 bg-amber-100 hover:bg-amber-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
