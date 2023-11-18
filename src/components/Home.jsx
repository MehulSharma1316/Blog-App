import React from 'react'
import Header from "./Header";
import Blog from "./Blogs";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <div className="flex flex-col h-screen  gap-y-[100px] ">
  
    <div>
    <Header/>

    </div>
   
    <Blog/>
    

    <Pagination/>
   
  </div>
  )
}

export default Home