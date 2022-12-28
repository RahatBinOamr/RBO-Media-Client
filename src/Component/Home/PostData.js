import React, { useContext } from 'react';
import {FcLike}from "react-icons/fc"
import {BiCommentX}from "react-icons/bi"
import {BsPersonBoundingBox}from "react-icons/bs"
import { AuthContext } from '../../Context/AuthContex';
import { Link } from 'react-router-dom';
const PostData = ({post}) => {
  // console.log(post);
  const {user}=useContext(AuthContext)
  const {picture,data,_id}=post
    return (
        <div className="card mt-5 mb-5 w-full bg-base-100 shadow-xl">
          <div className="py-3 px-6 flex border-b border-gray-300">
          {user?.photoURL ? (
              <img
              className="ml-3"
              style={{ height: "30px",width:"30px", borderRadius:"100%" }}
              
              src={user?.photoURL} alt=''
            ></img>
            
            ) : (
              <BsPersonBoundingBox className='text-3xl ml-4'/>
            )}
       <h4 className='text-xl font-bold ml-2'> {user?.displayName} </h4>
    </div>
        <div className="card-body">
          <p>{data}</p>
          <figure><img src={picture} alt="Shoes" /></figure>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"><FcLike/> </div> 
            <div className="badge badge-outline"><BiCommentX/></div>
          <Link to={`/posts/${_id}`}>  <div className="badge badge-outline">Details</div></Link>
          </div>
        </div>
      </div>
    );
};

export default PostData;