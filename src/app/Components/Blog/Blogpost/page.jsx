// BlogPost.js
import Image from "next/image";
import React from "react";

const BlogPost = ({ title, content, image }) => {
  return (
    <div className="container grid grid-cols-3   gap-6 h-full cursor-pointer ">
      <div className="box ">
        <div className="imgBx">
          <Image
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image}
            className=" rounded-sm imageBox hover:opacity-75"
            width={500}
            height={300}
          />
        </div>
        <div className="content">
          <div>
            <h2>Blog Title</h2>
            <p className=" underline">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
