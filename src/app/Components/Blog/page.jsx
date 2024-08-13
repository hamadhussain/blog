// Blog.js
import React from "react";
import BlogPost from "./Blogpost/page";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/Assets/1.jpg",
      title: "The Trip",
      content: "This is the content of the first blog post.",
    },
    {
      id: 2,
      image: "/Assets/2.jpg",

      title: "The End Times days",
      content: "This is the content of the second blog post.",
    },
    {
      id: 3,
      image: "/Assets/3.jpg",

      title: "The Conqueror",
      content: "This is the content of the third blog post.",
    },
  ];
  blogPosts.push();
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Blog;
