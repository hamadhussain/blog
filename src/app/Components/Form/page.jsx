"use client";
import React, { useState } from "react";
import Login from "./Login/page";
import Rejistration from "./Reg/page";
import { Switch, FormControlLabel } from "@mui/material";

const page = () => {
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);

  const switchh = () => {
    if (toggle) {
      setToggle(false);
    }
    if (!toggle) {
      setToggle(true);
    }
  };
  return (
    <div className=" -gap-56">
      
      {/* <button className={`toggle-button ${toggle ? 'active' : ''}`} onClick={ switchh }>
        {toggle ? 'Switch to Registration' : 'Switch to Login'}
      </button> */}
      {/* <button onClick={ switchh }>ddfs</button> */}
      {/* <FormControlLabel className=" flex justify-center items-center"
        control={<Switch checked={toggle} onChange={switchh} />}
        label={toggle ? "Login" : "Registration"}
      />
      {toggle ? <Login /> : <Rejistration />} */}
      {/* {!toggle && } */}
      {/* {loading?<Login/>:<Rejistration/>} */}
      <Login/>
    </div>
  );
};

export default page;
