import "./App.css";
import BlogCard from "./components/BlogCard";
//import { useState, useEffect } from "react";
import useBlogs from "./customedHooks/useBlogs";

function App() {
  const { blogPosts, loading, error } = useBlogs();
  //FETCHING DATA WITHOUT USING A SEPARATE HOOK:
  // const [blogPosts, setBlogPosts] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/blogs`)
  //     .then((response) => response.json())
  //     .then((response) => setBlogPosts(response));
  // }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (loading === false && blogPosts) {
    return (
      <div className="App">
        {blogPosts &&
          blogPosts.map((post) => (
            <div key={post._id}>
              <BlogCard post={post} />
            </div>
          ))}
      </div>
    );
  }

  if (error) {
    return <p>An error occured when fetching data...</p>;
  }
}

export default App;
