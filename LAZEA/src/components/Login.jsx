import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { userLogin, setUser, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const handleErrorMessage = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    if (!email || !password) {
      setError({ login: "Please provide valid email and password." });
      return;
    }
    
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000); // 1 second delay
      })
      .catch((err) => {
        const errorMessage = handleErrorMessage(err.code);
        toast.error(errorMessage);
      });
  };

  const handleForgotPassword = () => {
    localStorage.setItem("email", email);
    navigate("/forgot-password");
  };

  return (
    <div className="">
      <Helmet>
        <title> Login </title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 rounded-none p-10">
          <h3 className="text-3xl text-center font-bold"> Log in</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <button 
              onClick={handleGoogleSignIn} 
              type="button" 
              className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold border border-gray-300 rounded-md bg-transparent hover:text-white hover:bg-[#78cc44] dark:hover:border-[#78cc44] focus:outline-none"
            >
              <div className="text-xl"> <FaGoogle /> </div>
              Continue with Google
            </button>
           
            <div className="mt-6 flex items-center gap-4">
              <hr className="w-full " />
              <p className="text-sm text-center"> or </p>
              <hr className="w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email </span>
              </label>
              <input
                ref={emailRef} 
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email" 
                className="input input-bordered"
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Password </span>
              </label>
              <input 
                name="password" 
                type="password" 
                placeholder="password" 
                className="input input-bordered" 
                required 
              />
              { error.login && (
                  <label className="label text-sm text-red-600">
                    {error.login}
                  </label>
                )
              }
              <label onClick={handleForgotPassword} className="label">
                <a href="forgot-password" className="label-text-alt link link-hover text-[#78cc44] hover:text-[#78cc44] font-semibold">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#78cc44] hover:bg-[#78cc44] border-none text-white rounded-md">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm flex items-center justify-center">
            Don't have an account! 
            <Link to="/register" className="text-[#78cc44] font-semibold hover:underline ml-1 whitespace-nowrap">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;