import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { RiTwitterXFill } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'
import { createSearchParams, useNavigate } from 'react-router-dom'

const AuthorCard = (prop) => {
  const navigate = useNavigate();
  const handleClick = (prop) =>{
    navigate({
      pathname:"/author/individual",
      search: createSearchParams({
        img: prop.img,
        name:prop.name,
        bio:prop.bio,
      }).toString()
    })
  }
  return (
    <div className=''>
      <a href="#" className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row  md:max-w-xl 
       bg-gray-600" >
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={prop.img} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal" onClick={()=>handleClick(prop)}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.name}</h5>
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
              
            
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prop.bio}</p>
    </div>
</a>
    </div>
  )
}

export default AuthorCard
