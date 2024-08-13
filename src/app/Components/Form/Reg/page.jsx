// pages/register.js
"use client";
import Link from "next/link";
import React, { useState } from "react";
// import  {    RegistrationAction   }  from "../../Actions/Form_Actions";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation here
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      setError("Please fill in all fields");
    } else {
      // Submit registration data to server or perform user registration
      console.log("Registration data:", registerData);
      await RegistrationAction(registerData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen  gap-10 ">
      <h1 className=" uppercase relative  text-5xl font-bold h">
        Generative-Blogs
      </h1>{" "}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 form">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              value={registerData.username}
              onChange={handleChange}
              placeholder="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={registerData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <Link
          href="/Components/Form/Login"
          className=" underline text-blue-400 relative top-2 flex justify-end"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
