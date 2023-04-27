import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ post }) {
  //124 characters in one line
  var postContentwithoutEllipsis = post.content.slice(0, 480);
  var postContent = postContentwithoutEllipsis.concat("", "...");

  return (
    <div className="post">
      <Link to={`/blog/${post._id}`}>
        <img className="postImage" src={post.image} alt={post.title}></img>
      </Link>
      <Link className="postTitleLink" to={`/blog/${post._id}`}>
        <h2 className="postTitle" data-testid={post._id}>
          {post.title}
        </h2>
      </Link>
      <article className="postContent">{postContent}</article>
      <span>&#x1F4C5;</span>
      <p>{post.createdDate}</p>
    </div>
  );
}

export default BlogCard;

//square box
//showing info for one blog
//should use the data from our hook
//truncate the text for the blog

//id, title, content, image, createdDate
