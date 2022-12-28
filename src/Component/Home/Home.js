import React from "react";
import Banner from "../Banner/Banner";
import Left from "./Left/Left";
import Post from "./Post";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
      <div>
      <Left/>
        
      </div>
      <div>
        <Post/>
           <Posts/>
      </div>
      <div>
        
        <Banner />
      </div>
    </div>
  );
};

export default Home;
