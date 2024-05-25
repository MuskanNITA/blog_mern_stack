import React from "react";
import { useParams, navigate } from "react-router-dom";

const SingleBlog = () => {
  // Assuming you have a post object with properties like title, publishedDate, thumbnail, and description
  const post = {
    title: "Sample Blog Title",
    publishedDate: "2022-05-25",
    thumbnail: "https://example.com/sample-thumbnail.jpg",
    description: "This is a sample blog description.",
  };

  // You can use useParams to get the id of the blog post if needed
  // const { id } = useParams();

  return (
    <div className="container shadow my-3">
      <div className="col-md-12 d-flex items-center justify-content-center bg-light">
        <div className="row">
          <h1 className="my-3">{post.title}</h1>
          <p className="my-3">Published Date: {post.publishedDate}</p>
          <img
            src={post.thumbnail}
            className="img img-responsive img-rounded my-3"
            alt=""
          />
          <p className="my-3">{post.description}</p>
          <button className="btn btn-primary">
            Back To Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
