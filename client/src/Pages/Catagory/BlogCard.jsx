
import { createSearchParams, useNavigate } from 'react-router-dom';



const BlogCard = (prop) => {

  const navigate = useNavigate();
  const handleClick = (prop) =>{
    navigate({
      pathname:"/blog",
      search: createSearchParams({
        img: prop.img,
        catagory:prop.catagory,
        header:prop.hearder,
        body:prop.body,
        date:prop.date
      }).toString()
    })
  }

  return (
    <>
    <div className="relative 2xl:flex xl:flex 2xl:w-[100%] xl:w-[100%]  md:hidden hidden bg-clip-border rounded-xl bg-slate-600 text-gray-700 shadow-2xl shadow-gray-600 w-full max-w-[48rem] flex-row my-10  cursor-pointer" onClick={()=>handleClick(prop)}>
  <div
    className="relative w-2/5 m-0 overflow-hidden text-white bg-slate-600 rounded-r-none bg-clip-border rounded-xl shrink-0 ">
    <img
      src={prop.img}
      alt="card-image" className="object-cover w-full h-full  transition duration-300 ease-in-out hover:scale-110 " />
  </div>
  <div className="p-6">
  <div className='absolute top-2 left-2'>
            <button className="bg-gray-300  hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full flex  ">
            {prop.catagory}
            </button>
          </div>
    <h4 className=" mb-2 font-sans text-3xl antialiased font-bold leading-snug tracking-normal text-white hover:underline hover:underline-offset-4 hover:decoration-pink-600 duration-500 transition-all inline-block overflow-x-hidden overflow-y-hidden h-20 w-96">
      {prop.hearder}
    </h4>

    <div className='inline-block overflow-x-hidden overflow-y-hidden h-32 w-96  font-sans text-base antialiased font-normal leading-relaxed text-white mt-4'>
    <span className="">
      {prop.body}
    </span>
    </div>
    <p className='text-pink-600 mt-2'>{prop.date}</p>
  </div>
</div>  

    

<div className="  border  rounded-lg bg-slate-600 text-gray-700  2xl:hidden xl:hidden lg:w-[90%]  md:block md:w-[100%] w-[100%]  shadow-2xl shadow-gray-600  
block my-10" onClick={()=>handleClick(prop)}>
    <div >
        <img  className="rounded-t-lg w-full" src={prop.img} alt="" />
    </div>
    <div className="p-5 ">
    <h6 className='text-pink-600 mb-2 text-xl font-semibold'>{prop.catagory}</h6>
    <div className='flex flex-col'>
        <div className='nline-block overflow-x-hidden overflow-y-hidden h-16 md:w-full md:h-[10%]'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white i">{prop.hearder}</h5>
        </div>
        <div className='w-full inline-block overflow-x-hidden overflow-y-hidden h-36 mt-4'>
        <p className="mb-3 font-normal text-white">{prop.body}</p>
        </div>
    </div>
        <p className='text-pink-600 mt-2'>{prop.date}</p>
    </div>
</div>

    </>
  )
}

export default BlogCard
