// BlogPost.js
import Image from "next/image";
import React from "react";
import F from "../../../Footer/page";
import N from "../../../Nav/page";

const BlogPost = ({ title, content, image }) => {
  return (
    <>
      <N />
      <div className="flex  justify-center items-center p-20 gap-6 ">
        <Image src={image} width={400} height={100} />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <F />
    </>
  );
};

export default BlogPost;
