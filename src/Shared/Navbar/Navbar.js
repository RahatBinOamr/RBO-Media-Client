import React, { useContext } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContex';
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const hadelLogout=()=>{
    logOut()
    // localStorage.clear()
  }
    return (
        <div className="navbar bg-base-100">
             
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
           
            </ul>
          </div>
        </div>
        <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-start text-xl font-bold"> <span className='text-lime-500'>RBO </span> media  </Link>
  </div>
        <div className="navbar-end">
        <div className="form-control">
      <input type="text" placeholder="Search You Friend" className="input input-bordered" />
    </div> 
   
     
    {
              user?.email? 
              <> 
              {user?.photoURL ? (
              <img
              className="ml-3"
              style={{ height: "30px",width:"30px", borderRadius:"100%" }}
              
              src={user?.photoURL} alt=''
            ></img>
            
            ) : (
              <FaUser className='text-3xl ml-4'/>
            )}
             <BsMessenger  className='text-3xl ml-4'/> 
             <Link to='/about' className='text-xl font-bold ml-4 text-lime-500'> About </Link>
            <Link to='/login' onClick={hadelLogout} className='text-xl font-bold ml-4 text-lime-500 '> LogOut </Link>
            
            </> 
           
              : 
              <>
              
              <Link to='/login' className='text-xl font-bold ml-4 text-lime-500'> Login </Link>
              
             
              </>
            }
       
      
        </div>
      </div>
    );
};

export default Navbar;