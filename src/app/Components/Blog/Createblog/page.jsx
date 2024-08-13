"use client";
import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, image });
  };

  return (
    <>
      {" "}
      <div className="container mx-auto flex flex-col py-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a new Blog Post</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="8"
              placeholder="Enter blog content"
              required
            />
          </div>
          <div className="mb-4 border-2 p-2 rounded-lg flex flex-col justify-center items-center">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
             Select Image for your blog
            </label>
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
            {/* <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              accept="image/*"
            /> */}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>{" "}
      </div>
    </>
  );
};

export default BlogForm;
