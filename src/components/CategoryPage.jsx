import React, { useContext } from "react";
import Header from "./Header";
import Pagination from "./Pagination";


import Blogs from "./Blogs";
import { useLocation, useNavigate } from "react-router-dom";

const Category = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const category = location.pathname.split("/").at(-1).replaceAll("-"," ")

  function changeHandler(){
    navigate(-1)
  }
 
  return (
    <div className="flex flex-col h-screen  gap-y-[100px] ">
      <div>
        <Header />
      </div>
      <div>
      <div className='flex  w-full max-w-[670px] items-center mx-auto gap-2 mb-6'>
        <button onClick={changeHandler}
         className="border-2 border-gray-300 py-1 px-4 rounded-md"
        > Back</button>
        <p className="text-xl font-bold">Blogs On <span className=" underline">{category}</span></p>
      </div>
     <Blogs/>
      <Pagination />
      </div>
      
    </div>
  );
}

export default Category