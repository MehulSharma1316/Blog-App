import { useLocation, useParams } from 'react-router-dom';
import "./App.css"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import BlogPage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  
  const [searchParam, setSearchParam] = useSearchParams();
  console.log("first")
  let location = useLocation();
  console.log("second")
  
  useEffect(() => {
    const page = searchParam.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      console.log(tag)
      fetchBlogPosts(Number(page), tag)
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category)
    }
    
    else{
    fetchBlogPosts(Number(page));
  }
  },[location.pathname, location.search]);
  return (
    <div className="flex flex-col h-screen  gap-y-[100px] ">
     {console.log("this is mehul")}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
      </Routes>
    </div>
  );
}
