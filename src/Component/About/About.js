import React from "react";
import img from "../../Images/mine.jpg"
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Hello There</h1>
        <p className="py-6"> 
        My Name is Rahat Bin Omar <br /> I Am A Student of BGC Trust University at BSC  (hons.) in CSE <br /> I Leave in Ziri patiya Chittagon <br /> & My Email address is rahatbinomar@gmail.com
        </p>
        <button  className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
from-yellow-400 via-green-500 to-blue-500 text-white">Edit</button>
      </div>
    </div>
  </div>
  );
};

export default About;
