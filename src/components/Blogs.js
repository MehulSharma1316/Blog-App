import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spiner from './Spiner';
import Card from './Card';

const Blogs = () => {

  const {loading, posts} = useContext(AppContext);
  
  return (
    <div className='flex flex-col w-full max-w-[670px] mx-auto gap-10'>
      {
        loading ? (
          <div className='flex h-screen items-center justify-center'>
        {  console.log("loading is blog true", loading)}
       
          <Spiner/>
          </div>
        ) 
        :
        (
          posts.map((post) => {
            return <Card post={post} />
          })
        )
      }
    </div>
  )
}

export default Blogs