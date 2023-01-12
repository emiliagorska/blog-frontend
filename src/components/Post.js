import React from "react";
import { useParams } from "react-router-dom";

function Post({ postid }) {
  let params = useParams();

  return (
    <>
      <div>This is a single post page for post with id {params.id}</div>
      <div>
        <a href="/">Edinburgh Guide</a>
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
