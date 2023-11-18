import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const Card = ({post}) => {
    const location = useLocation()
   let blogId = location.pathname.split("/").at(-1)
  return (
    <div>
    <NavLink to={`/blog/${post.id}`}>
    <p className='text-lg font-bold '>{post.title}</p>
    </NavLink>
    <p className='mt-1 text-sm'>By <span className='italic'>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
      <span className='font-bold underline'>{post.category}</span>
      </NavLink>
    </p>
    <p className='mt-1 text-sm'>Posted On {post.date}</p>
    <p className='mt-4'>{post.content}</p>
    <div className='mt-2 flex gap-2'>
        {
            post.tags.map((tag, index) => {
              return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}> <span  className=' flex underline font-semibold text-xs  text-blue-600'>#{tag}</span> </NavLink> 
            } )
        }
    </div>
    </div>
  )
}

export default Card