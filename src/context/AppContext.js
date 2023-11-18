import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate()
 

  async function fetchBlogPosts(page = 1, tag=null, category) {
    setLoading(true);
    console.log("loading is true", loading)
    let url = `${baseUrl}?page=${page}`;
    if(tag){
      url += `&tag=${tag}`;
    }
    if(category){
      url += `&category=${category}`
    }

    console.log("print url");
    console.log(url);
    try {
      const output = await fetch(url);
      const data = await output.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
     

    } catch (err) {
      console.log(`error in fetch data ${err}`);
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
    console.log("loading is false", loading)
  }

  function handlePageChange(page) {
    navigate({ search: `?page=${page}`});
    setPage(page);
   
  }
  const value = {
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    posts,
    setPosts,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
   
   
  };

  return  <AppContext.Provider value={value}>
  {children}
</AppContext.Provider>;
}
