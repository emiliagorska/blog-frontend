import React from "react";
import "./BlogCard.css";

function BlogCard({ post }) {
  return (
    <div className="post">
      <img className="postImage" src={post.image} alt={post.title}></img>
      <a href="/" className="postTitle">
        {post.title}
      </a>
      <article className="postContent">{post.content}</article>
      <p> &#x1F4C5; {post.createdDate}</p>
    </div>
  );
}

export default BlogCard;

//square box
//showing info for one blog
//should use the data from our hook
//truncate the text for the blog

//id, title, content, image, createdDate
