import React, { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'


const CCard = (prop) => {
    const navigate = useNavigate();
    const handleClick = (prop) =>{
      navigate({
        pathname:"catagoryContent",
        search: createSearchParams({
          img: prop.img,
          catagory: prop.catagory,
        }).toString()
      })
    }
  return (
    <div className='' >
    <div className="w-72 h-72 p-6 rounded-xl  overflow-hidden shadow-lg bg-slate-500" onClick={()=>handleClick(prop)}>
  <img className="w-80 h-48 rounded-r-xl rounded-l-xl" src={prop.img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-white mb-2 text-center text-2xl">{prop.catagory}</div>    
  </div>
    </div>
  
</div>
  )
}

export default CCard
