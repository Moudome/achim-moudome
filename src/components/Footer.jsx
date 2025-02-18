import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`
          ${darkMode ? "dark bg-black" : "light bg-gray-700"}
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className=" text-slate-200 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            error doloribus dolores perspiciatis. Odit ratione laudantium eius
            voluptas iste accusantium blanditiis nam vero minus. Nostrum nobis
            odio perferendis debitis consectetur!
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className=" p-3 rounded-xl bg-white hover:bg-rose-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-rose-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-rose-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-rose-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className=" text-white mt-8 text-center">
            copyright Real Estate,All rights Reserved
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold">Contact Us</h1>
          <div className=" flex justify-center items-center gap-3">
            <FaBuilding className="size-5 text-white" />
            <p className=" text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nemo distinctio repellendus sint labo
            </p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <FaMobile className="size-5 text-white" />
            <p className=" text-slate-200">+237 697647717</p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <FaFax className="size-5 text-white" />
            <p className=" text-slate-200">697647717</p>
          </div>
          <div className=" flex justify-center items-center gap-3">
            <IoMdMail className="size-5 text-white" />
            <p className=" text-slate-200">achimmoundome@gmail.com</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className=" w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className=" text-lg text-white">Villa with amazing views</h1>
              <p className="text-slate-400">$ 567.76</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className=" w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className=" text-lg text-white">Smart view from Beach</h1>
              <p className="text-slate-400">$ 867.65</p>
            </div>
          </div>
        </div>
      </footer>

      {/*scroller */}

      <div
        id="icon-box"
        className=" bg-red-600 rounded-full p-4 hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="Hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* mode sombre et clair */}
      <div>
        <button
          onClick={toggleDarkMode}
          className=" flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-20"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
