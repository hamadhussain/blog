import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center p-20 ">
        <h1 className=" py-6 text-6xl">BLOGS</h1>
        <div>
          <ul className=" flex gap-8">
            <Link href="/">
              <li className="link  hover:opacity-70 cursor-pointer capitalize  text-2xl">
                blog
              </li>
            </Link>
            <Link href="/Components/About">
              <li className="link  hover:opacity-70 cursor-pointer  text-2xl">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
