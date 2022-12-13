import React from "react";
import { useParams } from "react-router-dom";

function Post({ postid }) {
  let params = useParams();

  return <div>This is a single post page for post with id {params.id}</div>;
}

export default Post;
