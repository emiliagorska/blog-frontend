import "./App.css";
//import { useState, useEffect } from "react";
import useBlogs from "./useBlogs";

function App() {
  const [blogPosts] = useBlogs();
  //FETCHING DATA WITHOUT USING A SEPARATE HOOK:
  // const [blogPosts, setBlogPosts] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/blogs`)
  //     .then((response) => response.json())
  //     .then((response) => setBlogPosts(response));
  // }, []);

  return (
    <div className="App">
      Posts:
      {blogPosts &&
        blogPosts.map((post) => (
          <div key={post._id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <img src={post.image} alt={post.title}></img>
            <div>{post.createdDate}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
