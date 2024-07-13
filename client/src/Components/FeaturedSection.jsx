import React from "react";
import { GoDotFill } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri"
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const FeaturedSection = () => {
  return (
    <div className="bg-slate-600 h-auto 2xl:w-[580px] xl:w-[450px] lg:w-[100%] my-10 px-4 rounded-xl  ">
      {/* Featured Post */}
      <div>
        <div className="">
          <h1 className="text-2xl text-pink-600 mx-4 pt-4 pb-8 font-bold underline underline-offset-8 decoration-2 decoration-white">
            Featured Post
          </h1>
        </div>
        <div className="mx-4 cursor-pointer z-5">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>

                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 my-8 cursor-pointer">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>
                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 pb-4 cursor-pointer">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>
                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Tags */}

      <div className="py-4 mx-6 w-96">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-pink-600 underline underline-offset-[10px] decoration-2 decoration-white">Tags</h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex  ">
            <GoDotFill className="text-fuchsia-500 my-auto text-2xl"/> Food
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex ">
            <GoDotFill className="text-green-500 my-auto text-2xl"/> Health
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex ">
            <GoDotFill className="text-sky-400 my-auto text-2xl"/> Inspiration
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex ">
            <GoDotFill className="text-blue-600 my-auto text-2xl"/> Lifestyle
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex ">
            <GoDotFill className="text-pink-300 my-auto text-2xl"/> Nature
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex ">
            <GoDotFill className="text-orange-500 my-auto text-2xl"/> Technology
            </button>
          </div>

          <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex w-28">
            <GoDotFill className="text-purple-400 my-auto text-2xl"/> Travel
            </button>
          </div>
        </div>
      </div>

      {/* Latest Post */}

      <div className="mt-5">
        <div className="">
          <h1 className="text-2xl text-pink-600 mx-4 pt-4 pb-8 font-bold underline underline-offset-8 decoration-2 decoration-white">
            Latest Post
          </h1>
        </div>
        <div className="mx-4 cursor-pointer">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>

                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 my-8 cursor-pointer">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>
                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 my-8 pb-4 cursor-pointer">
          <div>
            <div className="relative flex bg-clip-border rounded-xl bg-slate-600 text-white  w-full  max-w-[48rem] flex-row">
              <div className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600  bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image"
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:underline hover:underline-offset-8 hover:decoration-3 decoration-pink-600 duration-500">
                  Lyft launching cross-platform service this week
                </h4>
                <h5 className="text-pink-600">May 2, 2022</h5>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Follow Us */}

      <div className="pb-10 mx-6">
        <div className="text-2xl font-bold text-pink-600 pb-2 underline underline-offset-8 decoration-2 decoration-white mb-4">
            <h1>Follow Us</h1>
        </div>
        <div className="flex gap-4 text-white cursor-pointer">
            <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <TiSocialFacebook className="text-4xl hover:text-pink-600 duration-500 "/>
            </div>
            <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <RiTwitterXFill className="text-3xl hover:text-pink-600 duration-500"/>
            </div>
            <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <GrInstagram className="text-3xl hover:text-pink-600 duration-500"/>
            </div>
            <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <FaGithub className="text-3xl hover:text-pink-600 duration-500"/>
            </div>
            <div className="bg-gray-500 h-12 w-12 rounded-full grid place-content-center">
                <FaLinkedinIn className="text-3xl hover:text-pink-600 duration-500"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
