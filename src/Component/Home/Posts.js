import React, { useEffect, useState } from 'react';
import PostData from './PostData';

const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    
    return (
        <div>
            {
                posts?.map(post=><PostData
                key={post._id}
                post={post}
                ></PostData>)
            }
        </div>
    );
};

export default Posts;