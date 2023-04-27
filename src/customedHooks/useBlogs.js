//we wantto handle 3 states:
//if the data isnt available yet, but is loading

import { useEffect, useState } from "react";

export default function useBlogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((response) => response.json())
      .then((response) => setBlogPosts(response))
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { blogPosts, loading, error }
}

export function usePostByID(id) {
  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((response) => response.json())
      .then((response) => setPost(response[0]))
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
      });
  }, []);


  return { Post, loading, error }
}


