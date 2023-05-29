import React from "react";
import { useParams } from "react-router-dom";
import { usePostByID } from "../customedHooks/useBlogs";
import "./Post.css";
//require(myphoto.jpg)

function Post({}) {
  let params = useParams();
  const { Post, loading, error } = usePostByID(params.id);

  console.log(Post)

  return (
    <>
    <div className="imgContainer">
    <img className="postImg" src={Post.image} alt={Post.title} />
    </div>
    <div className="contentContainer">
      <div className="postTitle sidebar">
      <img className="authorsPhoto" src={require("../assets/myphoto.JPG")} alt="Author of the post" />
      <div className="postDate">
      <span className="calendarIcon">&#x1F4C5;</span>
        {Post.createdDate}
        </div>
      </div>
      <div className="content">
    <h1 className="postTitle" data-testid={Post._id}>
          {Post.title}
          </h1>   
      <article className="postContent">{Post.content}</article>
        </div>
      </div>
    </>
  );
  // Header - with name of the blog on the left and expandable bar on the right
  // Image
  // Title
  // Content
  //Footer - perhaps with 'leave a comment' section
}

export default Post;
