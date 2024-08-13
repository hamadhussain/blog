// pages/login.js
"use client";
import Link from "next/link";
// import  {loginAction}  from "../../Actions/Form_Actions";
import React, { useState,useEffect } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation here
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
    } else {
      // Submit login data to server or perform authentication
      console.log("Login data:", loginData);

      let p="hello"
      // if (
      loginAction(loginData);
      //   ) {
      //   console.log("working");
      // }
    }
  };
  // useEffect(() => {
  //   // Effect code here
  // }, [loginData]);

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen gap-10">
    <h1 className=" uppercase text-5xl font-bold h">Generative-Blogs</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 form">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange} placeholder="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password} placeholder='password'
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <Link href="/Components/Form/Reg" className=" underline text-blue-400 relative top-2 flex justify-end">Sign Up</Link>
      </div>
    </div>
    </>
  );
};

export default Login;