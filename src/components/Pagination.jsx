import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, totalPage, handlePageChange} = useContext(AppContext)
  function nextHandeler(){
   handlePageChange(page+1);
  }

   function previousHandler() {
   
      handlePageChange(page-1);
  }
  return (
    <div className='w-full border-2 shadow-md bg-white fixed bottom-0'>

    <div className='w-full max-w-[670px] flex justify-between mx-auto py-2 '>
    <div>
    {
      page == 1 ? 
      <button className='border-2 py-1 px-4 rounded-md shadow'
      onClick={nextHandeler}>Next</button>
      :
      (
        page == totalPage ? (
          <button  className='border-2 py-1 px-3 rounded-md shadow'
          onClick={previousHandler}>previous</button>
        )
        :
            (
              <div className='flex gap-3'>
                <button  className='border-2 py-1 px-4 rounded-md shadow'
                onClick={previousHandler}>
                  Previous
                </button>
                <button  className='border-2 py-1 px-4 rounded-md shadow'
                onClick={nextHandeler}>
                  Next
                </button>
              </div>
            )      
            )
    }
    </div>
    
    <div className='py-2 px-2 font-semibold text-sm'>
    <p>Page {page} of {totalPage}</p>

    </div>
    </div>
    </div>
  )
}

export default Pagination