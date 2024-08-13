"use client";
import React from "react";
import Footer from "./Footer/page";
import Header from "./Nav/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Blog from "./Blog/page";
import L from "../Layout/page";
import Lay from "../Components/Lay/layout";

const page = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />

      <L>
        <Blog />
      </L>
      <Footer />
    </div>
  );
};

export default page;
