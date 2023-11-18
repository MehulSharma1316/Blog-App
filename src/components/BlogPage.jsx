import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Pagination from "./Pagination";
import { useLocation, useNavigate,  } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import Card from "./Card";
import Spiner from "./Spiner";
const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  

  console.log("Blog id is", blogId);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  console.log("New url", newBaseUrl);
  console.log("before", loading);
  async function fetchRelatedBlogs() {
    setLoading(true);
    console.log("inside", loading);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("Only url", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("blog data is ", data);
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
      console.log("Blog's data hai", blog);
      console.log("related blog is ", relatedBlog);
    } catch (error) {
      console.log("error in fetch data");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }
  console.log("after", loading);

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname, location.search]);

  function changeHandler() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col h-screen  gap-y-[100px] ">
      <div>
        <Header />
      </div>
      <div>
        <div className="flex  w-full max-w-[670px] items-center mx-auto gap-2 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            
            Back
          </button>
        </div>
        <div >
          {loading ? (
            <div className="flex h-screen items-center justify-center">
            <Spiner />
            </div>
          ) :
          blog ? (
            <div className='flex flex-col w-full max-w-[670px] mx-auto gap-10'>
              <Card post={blog} />

              <p className="text-3xl font-extrabold"> Related Blog</p>
              {relatedBlog.map((post) => (
                <div key={post.id}>
                  <Card post={post} />
                </div>
              ))}
            </div>
          ) :
          (
            <div>
              No Blog found
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
