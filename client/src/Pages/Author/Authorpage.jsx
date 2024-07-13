import React from 'react'
import AuthorCard from '../../Components/AuthorCard'
import img1 from "./img/021e64775176cc4c7018e5e867f17de2.jpeg"
import img2 from "./img/Apurba.jpg"
import img3 from "./img/harini.jpg"
import img4 from "./img/ishan.jpg"
import img5 from "./img/suravi.jpg"

const Authorpage = () => {
  return (
    <div className='mb-36'>
    <h1 className='text-center mt-14 mb-24 text-4xl font-bold'>Authors</h1>
    <div className='flex flex-wrap justify-center gap-8 my-10'>
      <AuthorCard img={img1} name="Biswajit Saha" bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eveniet." />
      <AuthorCard img={img2} name="Apurba Talukdar" bio="Apurba is UI & UX designer by profession, photographer by passion. Solo traveller, blogger, badminton player and movie lover." />
      <AuthorCard img={img3} name="Surabhi Gupta" bio="Front end developer by profession. Digital painting enthusiast. She also involved in various social activity. Fan of winter and snow." />
      <AuthorCard img={img4} name="Harini Banerjee" bio="Harini Banerjee is award winning young blogger and content marketer. She also sings some time. Frequent traveler, cricket fan and technology enthusiast." />
      <AuthorCard img={img5} name="Ishan Sharma" bio="Lorem ipsum dolor sit amet, consectetur adiIshan is back end developer by profession and writer by passion. He writes science fiction novels and short story mostly for children. He is the always smiling person." />
    </div>
    </div>
  )
}

export default Authorpage
