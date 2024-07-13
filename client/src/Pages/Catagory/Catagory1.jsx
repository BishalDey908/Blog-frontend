import React from 'react'
import CCard from '../../Components/CCard'
import Insperation from "./Img/Insperation.jpg"
import Nature from "./Img/nature.jpg"
import Lifestyle from "./Img/lifestyle.jpg"
import Health from "./Img/health.jpg"
import Travel from "./Img/travel.jpg"
import Food from "./Img/food.jpg"
import Technology from "./Img/technology.jpg"


const Catagory1 = () => {

    

  return (
    <div className='my-16'>
    <div className='text-center text-4xl font-bold my-20'>
        <h1 >Catagory</h1>
    </div>
    <div className='w-full h-[90%] flex flex-wrap justify-center gap-8 '>
      <CCard img={Insperation} catagory={"Inspiration"} />
      <CCard img={Nature} catagory={"Nature"} />
      <CCard img={Lifestyle} catagory={"Lifestyle"} />
      <CCard img={Health} catagory={"Health"} />
      <CCard img={Travel} catagory={"Travel"} />
      <CCard img={Food} catagory={"Food"} />
      <CCard  img={Technology} catagory={"Technology"} />
    </div>
    </div>
  )
}

export default Catagory1
