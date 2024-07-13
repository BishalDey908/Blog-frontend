import { useEffect, useState } from 'react'
import BlogCard from "./BlogCard";
import Technology from "./Img/technology.jpg"
import FeaturedSection from '../../Components/FeaturedSection';
import { useSearchParams } from 'react-router-dom';


const Catagory2 = () => {
    const[img,setImg] = useState()
    const[catagory,setCatagory] = useState()
    const [searchParams] = useSearchParams();
    useState(() => {
        setImg(searchParams.get("img"));
        setCatagory(searchParams.get("catagory"));
        
      }, []);
  return (
    <div>
        <div className='flex justify-center  h-96  w-full mt-12 bg-slate-500 py-4 rounded-2xl bg-opacity-60 '>
            <img src={img} alt="" srcset="" width="50%" className='relative rounded-2xl '/>
            <div className='absolute bg-slate-600 text-white h-auto w-[20%] my-20 bg-opacity-50 rounded-2xl '>
            <h1 className='text-4xl text-center py-20 font-bold '>{catagory}</h1>
            </div>
        </div>
        
      <div className="flex justify-between pt-4 xl:gap-8">
        <div className=" ">
        <BlogCard img={Technology} catagory={catagory} hearder="Autumn is a second spring when every leaf is a flower" body ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit odio deserunt, sint quis reprehenderit nostrum repellat blanditiis repellendus quod voluptates ex minus a dolorum vel incidunt molestiae dignissimos qui. Recusandae assumenda id dignissimos cum iusto aperiam animi doloremque nihil fuga quos nemo consequuntur alias eum et totam aspernatur, obcaecati quia? Ipsam aut maxime temporibus. Eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione aut omnis. Esse error eaque doloribus laborum cupiditate cum consectetur blanditiis sed placeat laboriosam dolorem obcaecati molestiae deserunt aperiam unde, sint at suscipit autem assumenda illum optio similique aut? Vero recusandae nostrum tenetur, accusantium nihil impedit amet inventore quo assumenda sapiente expedita porro cupiditate dolorum." date="May 2, 2022"/>
        
        </div>
         
        <div className="2xl:block xl:block lg:block md:hidden hidden">
        <FeaturedSection/>
        </div>
        </div>
    </div>
  )
}

export default Catagory2
