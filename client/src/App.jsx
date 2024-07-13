import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar"
import BlogPostPage from './Pages/BlogPostPage'
import Home from './Pages/Home'
import { BrowserRouter,   Route, Routes } from 'react-router-dom'
import Catagory1 from './Pages/Catagory/Catagory1'
import Catagory2 from './Pages/Catagory/Catagory2'
import Authorpage from './Pages/Author/Authorpage'
import IndividualAuthor from './Pages/Author/IndividualAuthor'

import Features from './Pages/Features'


function App() {
  
  return (
    <div>
    <div className=' 2xl:mx-32 2xl:my-16 xl:mx-32 xl:my-16 md:mx-12 md:my-10 mx-4 main my-6 '>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/blog' element={<BlogPostPage />} />
        <Route  path='/catagory' element={<Catagory1 />} />
        <Route path='/catagory/catagoryContent' element={<Catagory2 />}/>
        <Route path='/author' element={<Authorpage />}/>
        <Route path='/author/individual' element={<IndividualAuthor />}/>
        <Route path='/features' element={<Features />}/>
      </Routes>
    </BrowserRouter>
      
    </div>
      <Footer/>
    
    </div>
  )
}

export default App
