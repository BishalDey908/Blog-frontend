import React, { useState } from "react";
import FeaturedSection from "../Components/FeaturedSection";
import img1 from "../assets/img/food.jpg";
import { useSearchParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Author from "../assets/img/author.jpg";
import AuthorCard from "../Components/AuthorCard";
import Comment from "../Components/Comment";

const BlogPostPage = (prop) => {
  const [img, setImg] = useState();
  const [catagory, setCatagory] = useState();
  const [header, setHeader] = useState();
  const [body, setBody] = useState();
  const [date, setDate] = useState();
  const [searchParams] = useSearchParams();

  useState(() => {
    setImg(searchParams.get("img"));
    setCatagory(searchParams.get("catagory"));
    setHeader(searchParams.get("header"));
    setBody(searchParams.get("body"));
    setDate(searchParams.get("date"));
  }, [img]);
  return (
    <div className="flex justify-between gap-8 ">
      {/* Main Blog Place */}
      <div>
        <div className="mt-10 2xl:w-full xl:w-full lg:w-full md:w-full w-full mr-4 h-auto bg-slate-600 rounded-2xl pb-10 box">
          <div className="flex justify-center py-6 w-auto mx-4">
            <img src={img} alt="" className="rounded-2xl" />
          </div>
          <div className="mx-10">
            <div className="h-auto ">
              <p className="text-lg text-white">{catagory}</p>
              <h1 className="text-4xl font-bold text-white">{header}</h1>
              <p className="mt-4 text-gray-400">{date}</p>
            </div>

            <div className="mt-10 text-gray-300">
              <p>{body}</p>
            </div>
          </div>
        </div>

        {/* Shared Section */}
        <div className="flex justify-center share">
        <div className="rounded-xl my-4 py-6   h-auto w-full bg-slate-600">
          <div className="text-center text-xl font-bold text-white mb-4">
            <h1>Share This Article</h1>
          </div>
          <div>
            <div className=" gap-4 text-white cursor-pointer py-4 flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center justify-center flex-wrap ">
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <TiSocialFacebook className="text-4xl text-blue-600 hover:text-pink-600 duration-500 " />
              </div>
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <RiTwitterXFill className="text-3xl text-sky-500 hover:text-pink-600 duration-500" />
              </div>
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <FaPinterest className="text-3xl text-red-600 hover:text-pink-600 duration-500" />
              </div>
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <IoLogoWhatsapp className="text-3xl text-green-400 hover:text-pink-600 duration-500" />
              </div>
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <FaLinkedinIn className="text-3xl text-blue-700 hover:text-pink-600 duration-500" />
              </div>
              <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <MdEmail className="text-3xl hover:text-pink-600 duration-500" />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Author Info */}
        <div className="">
          <a
            href="#"
            className="flex flex-col items-center bg-slate-600 border border-gray-200  shadow md:flex-row  2xl:w-full xl:flex lg:flex md:flex hidden  rounded-xl "
          >
            <img
              className=" w-full  h-96 md:h-auto md:w-48 ml-4 md:rounded-none md:rounded-s-lg "
              src={Author}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Harini Banerjee
              </h5>
              <div className=" gap-4 text-white cursor-pointer pt-2 pb-2 flex">
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <TiSocialFacebook className="text-xl text-blue-600 hover:text-pink-600 duration-500 " />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <RiTwitterXFill className="text-xl text-sky-500 hover:text-pink-600 duration-500" />
                </div>

                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <IoLogoWhatsapp className="text-xl text-green-400 hover:text-pink-600 duration-500" />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <FaLinkedinIn className="text-xl text-blue-700 hover:text-pink-600 duration-500" />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <MdEmail className="text-xl hover:text-pink-600 duration-500" />
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Harini Banerjee is award winning young blogger and content
                marketer. She also sings some time. Frequent traveler, cricket
                fan and technology enthusiast.
              </p>
            </div>
          </a>
        </div>

        <div className="2xl:hidden xl:hidden lg:hidden md:hidden flex justify-center">
          <div className="w-[80%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
              <img
                className="rounded-t-lg w-auto h-96"
                src={Author}
                alt=""
                
              />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Harini Banerjee
                </h5>
              </a>
              <div className=" gap-4 text-white cursor-pointer pt-2 pb-4 flex">
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <TiSocialFacebook className="text-xl text-blue-600 hover:text-pink-600 duration-500 " />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <RiTwitterXFill className="text-xl text-sky-500 hover:text-pink-600 duration-500" />
                </div>

                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <IoLogoWhatsapp className="text-xl text-green-400 hover:text-pink-600 duration-500" />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <FaLinkedinIn className="text-xl text-blue-700 hover:text-pink-600 duration-500" />
                </div>
                <div className="bg-gray-500 h-8 w-8 rounded-full grid place-content-center">
                  <MdEmail className="text-xl hover:text-pink-600 duration-500" />
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Harini Banerjee is award winning young blogger and content
                marketer. She also sings some time. Frequent traveler, cricket
                fan and technology enthusiast.
              </p>
              
            </div>
          </div>
        </div>

        <Comment/>
      </div>

      <div className=" xl:w-[50%] xl:block lg:w-[48%] lg:block md:hidden hidden">
        <FeaturedSection />
      </div>
    </div>
  );
};

export default BlogPostPage;
