import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.cpassword) {
        window.alert("Passwords do not match");
        return;
      }
      
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
  
      console.log("Registration successful:", response.data);
      window.alert("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="justify-center text-left bg-white rounded-lg shadow-md px-[100px] py-14">
          <img
            src="https://i.postimg.cc/MKD7wbB5/Cook.png"
            alt="Logo"
            className="h-[40px] items-center justify-center px-[350px]"
          ></img>
          <br />
          <div className="justify-center mb-4 text-2xl font-semibold text-gray-700 ">
            Register
          </div>
          <div className="flex items-center justify-center gap-4 space-2">
            <label className="relative">
              <input
                type="text"
                placeholder="First name "
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
                className="h-[50px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700 "              />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Your name *
              </span>
            </label>

            <br />

            <label className="relative">
              <input
                type="text"
                placeholder="Last name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
                className="h-[50px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700 "
              />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Last name
              </span>
            </label>
          </div>
          <br />
          <div className="flex items-center justify-center gap-4 space-2">
            <label className="relative">
              <input
                type="text"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-[50px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700 "              />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Email
              </span>
            </label>

            <br />

            <label className="relative">
              <input
                type="text"
                placeholder="phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="h-[50px] w-96 px-6 text-xl text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700 "              />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Phone number
              </span>
            </label>
          </div>
          <br />
          <div className="flex items-center justify-center gap-4 space-2">
            <label className="relative">
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-[50px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700 "              />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Password
              </span>
            </label>

            <br />

            <label className="relative">
              <input
                type="password"
                placeholder="confirm password"
                name="cpassword"
                value={formData.cpassword}
                onChange={handleChange}
                required
                className='h-[50px] w-96 px-6 text-md text-blue-500 bg-white border-black-700 border-2 rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 placeholder-red-500 placeholder-opacity-0 transition duration-700' />
              <span className="absolute px-2 text-base text-blue-700 transition duration-700 bg-white text-opacity-80 left-2 top-3 input-text">
                Confirm password
              </span>
            </label>
          </div>
          <br />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#eb4e87] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[240px] drop-shadow-md hover:drop-shadow-xl"
            >
              Create account
            </button>

            <br />

            <br></br>
          </div>
          <div className="flex items-center justify-center ">
            <div className="inline-block text-sm font-semibold text-blue-500 align-baseline hover:text-blue-700">
              Already have an account?
              <span className="text-red-400">
                
                <a href="">Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
