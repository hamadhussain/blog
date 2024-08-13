import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center p-12">
        <div className=" flex py-2 gap-5">
          <Link href="https://en-gb.facebook.com/">
            <FaFacebookF className="  hover:opacity-70 cursor-pointer" />
          </Link>
          <Link href="https://www.google.com/intl/en_uk/gmail/about/">
            <SiGmail className="  hover:opacity-70 cursor-pointer" />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter className="  hover:opacity-70 cursor-pointer" />
          </Link>
        </div>
        POWERED BY WEBFLOW
      </div>
      {/* <div className="fixed border-t-2 mt-8 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">

      </div> */}
    </>
  );
};

export default page;
