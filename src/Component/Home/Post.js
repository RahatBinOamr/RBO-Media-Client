import React from 'react';
import { toast } from 'react-toastify';


const Post = () => {
  
    const handelForm = (e)=>{
        e.preventDefault()
        const form= e.target;
        const text = form.text.value;
        const photoURL = form.photoURL.value;
        const postData ={
            picture : photoURL,
            data:text,
        }
        console.log(postData);

        fetch(`http://localhost:5000/post`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        form.reset()
        toast.success("Your Post Successfully")
      }
        console.log(data)
    })
    }


    return (

        <form onSubmit={handelForm}>
            <textarea className='border' name="text" id="" cols="50" rows="2" placeholder='Enter Your Text'></textarea><br />
            <div className="form-control">
            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered mb-2 w-96" />
          </div>
           
            <button  className="btn  btn-sm h-12  bg-gradient-to-tr rounded-lg
from-yellow-400 via-green-500 to-blue-500 text-white">Submit</button>
        </form>
    );
};

export default Post;