import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContex";
import Loading from "./Loadding";

const Register = () => {
  const { googleLogin, createUser, updateUserProfile, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handelRegisterFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Register successful!", { autoClose: 500 });
        handleUpdateUserProfile(name, photoURL);
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, { autoClose: 500 });
      });
  };
  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        toast.success("Login successful!", { autoClose: 500 });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage, { autoClose: 500 });
      });
  };
  if (loading) {
    return <Loading />;
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={handelRegisterFrom}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your photoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                If You Have Already Account Please{" "}
                <Link className="text-cyan-500" to="/login">
                  {" "}
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
from-yellow-400 via-green-500 to-blue-500 text-white"
              >
                Register
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handelGoogle}
                className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
from-yellow-400 via-green-500 to-blue-500 text-white"
              >
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
