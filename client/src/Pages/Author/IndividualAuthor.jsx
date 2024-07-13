import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../Catagory/BlogCard';
import FeaturedSection from '../../Components/FeaturedSection';
import Technology from "./img/technology.jpg"
import backgroundImg from "./img/mountains-3324569_1280.jpg"

const IndividualAuthor = () => {
    const[img,setImg] = useState()
    const[bio,setBio] = useState()
    const[name,setName] = useState()
    const [searchParams] = useSearchParams();
    useState(() => {
        setImg(searchParams.get("img"));
        setName(searchParams.get("name"));
        setBio(searchParams.get("bio"));
        
      }, []);
  return (
    <div>
        <div className='flex justify-center  h-96  w-full mt-12 bg-slate-500 px-4 py-4 rounded-2xl bg-opacity-60 '>
        
            <img src={backgroundImg} alt="" srcset="" width="100%" height="100% " className='rounded-2xl'/>
            <div className='absolute bg-slate-600 text-white h-auto w-[80%]  bg-opacity-50 rounded-2xl 2xl:py-10 2xl:my-3 xl:py-6 xl:my-6 lg:my-6 md:my-16 my-20'>
            <div className='my-6'>
            <div className='grid place-content-center '>
            <img src={img} className='2xl:h-40 xl:h-40 lg:h-40 md:h-40 h-28 rounded-full' alt="" srcset="" />
            </div>
            <h1 className='2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl text-center  font-bold '>{name}</h1>
            </div>
            </div>
        </div>
        
      <div className="flex justify-between pt-4 xl:gap-8">
        <div className=" ">
        <BlogCard img={Technology} catagory="Technology" hearder="Autumn is a second spring when every leaf is a flower" body ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit odio deserunt, sint quis reprehenderit nostrum repellat blanditiis repellendus quod voluptates ex minus a dolorum vel incidunt molestiae dignissimos qui. Recusandae assumenda id dignissimos cum iusto aperiam animi doloremque nihil fuga quos nemo consequuntur alias eum et totam aspernatur, obcaecati quia? Ipsam aut maxime temporibus. Eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione aut omnis. Esse error eaque doloribus laborum cupiditate cum consectetur blanditiis sed placeat laboriosam dolorem obcaecati molestiae deserunt aperiam unde, sint at suscipit autem assumenda illum optio similique aut? Vero recusandae nostrum tenetur, accusantium nihil impedit amet inventore quo assumenda sapiente expedita porro cupiditate dolorum." date="May 2, 2022"/>
        
        </div>
         
        <div className="2xl:block xl:block lg:block md:hidden hidden">
        <FeaturedSection/>
        </div>
        </div>
    </div>
  )
}

export default IndividualAuthor
