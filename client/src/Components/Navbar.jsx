import { useState } from "react";
import logo from "../assets/img/logo-light.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {Link, NavLink}  from "react-router-dom";

const Navbar = () => {
  const [handleHamburger, setHandleHamburger] = useState(false);
  const hamburger = () => {
    setHandleHamburger(!handleHamburger);
  };
  return (
    <>
      <div className="bg-gray-600  h-20  flex place-content-around text-xl py-4 text-white shadow-xl  Navbar z-50 ">
        <div>
          <img
            className="2xl:h-10 xl:h-12 md:h-12 h-8 md:my-0 my-1"
            src={logo}
            alt=""
          />
        </div>
        <div className="2xl:flex gap-32 xl:hidden md:hidden hidden">
          <div className="py-2 flex gap-10 ">
            <div className="flex gap-4">
            
              <NavLink to="/" className="relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-pink-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-pink-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                Home
              </NavLink>
              <NavLink to="/catagory" className="relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-pink-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-pink-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span>Catagory</span>
              </NavLink>
              <NavLink to="/author" className="relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-pink-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-pink-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span>Authors</span>
              </NavLink>
              
              <NavLink to="/features" className="relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-pink-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-pink-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span>Features</span>
              </NavLink>
            </div>
          </div>

          <div className="flex  gap-4 navtitle">
            <div className="py-2">
              <div className="relative  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-pink-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:top-7 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-pink-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:top-7 after:right-[50%]">
                <span>Sign in</span>
              </div>
            </div>
            <div className="">
              <button className="bg-pink-600 py-2 px-4 rounded-full    z-10 transition-opacity duration-300 hover:opacity-70 ">
                Become Member
              </button>
            </div>
          </div>
        </div>

        <div className="py-1 2xl:hidden gap-32 xl:block md:block block">
          {handleHamburger ? (
            <div>
              <ImCross className="text-4xl" onClick={hamburger} />
            </div>
          ) : (
            <div>
              <GiHamburgerMenu className="text-4xl" onClick={hamburger} />
            </div>
          )}
        </div>
      </div>
      {handleHamburger && (
        <div className="h-full 2xl:w-0 2xl:hidden xl:w-[82%] lg:w-[84%] md:w-[87%] w-[92%] bg-slate-500 bg-opacity-90 mt-10 fixed z-50 ">
        
          <div className="">
            <ul className="text-center xl:py-32 md:py-14 py-10 flex flex-col gap-10">
              <li className="2xl:text-4xl xl:text-4xl md:text-4xl text-2xl">HOME</li>
              <li className="2xl:text-4xl xl:text-4xl md:text-4xl text-2xl">Catagory</li>
              <li className="2xl:text-4xl xl:text-4xl md:text-4xl text-2xl">Authors</li>
              <li className="2xl:text-4xl xl:text-4xl md:text-4xl text-2xl">Trends</li>
              <li className="2xl:text-4xl xl:text-4xl md:text-4xl text-2xl">Features</li>
            <div className="grid xl:grid-flow-col md:grid-flow-col grid-flow-row place-content-center gap-4 text-2xl">
                <div className="">
                <button className="bg-pink-600 py-2 px-4 rounded-full    z-10 transition-opacity duration-300 hover:opacity-70 ">
                Become Member
              </button>
                </div>
                <div className="my-2">
                    <p >Sign In</p>
                </div>
            </div>
            </ul>
          </div>
        </div>
      )}
      
    </>
  );
};

export default Navbar;
