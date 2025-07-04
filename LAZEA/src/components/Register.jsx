import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthContext";

const Register = () => {
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const auth = getAuth();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({});

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Validation
    if (name.length < 3) {
      setError({ ...error, name: "Name must be at least 3 characters long." });
      setIsLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must contain at least 6 characters with one uppercase and one lowercase letter", {
        position: "top-right",
        autoClose: 5000,
      });
      setIsLoading(false);
      return;
    }

    try {
      // Create user
      const userCredential = await createNewUser(email, password);
      setUser(userCredential.user);
      
      // Update profile
      await updateUserProfile(auth.currentUser, { 
        displayName: name, 
        photoURL: photo 
      });

      toast.success("Registration successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });

      // Redirect after delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await logInWithGoogle();
      toast.success("Signed in with Google successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      toast.error(`Google sign-in failed: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 rounded p-10">
          <h2 className="text-3xl text-center font-bold">Register</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <button 
              onClick={handleGoogleSignIn} 
              type="button" 
              className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold border border-gray-300 rounded-md bg-transparent hover:text-white hover:bg-[#78cc44] dark:hover:border-[#78cc44] focus:outline-none"
            >
              <div className="text-xl"><FaGoogle /></div>
              Continue with Google
            </button>
            <div className="mt-6 flex items-center gap-4">
              <hr className="w-full" />
              <p className="text-sm text-center">or</p>
              <hr className="w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input 
                name="name" 
                type="text" 
                placeholder="Your name" 
                className="input input-bordered" 
                required
              />
              {error.name && (
                <label className="label text-xs text-red-600">
                  {error.name}
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Photo URL</span>
              </label>
              <input 
                name="photo" 
                type="text"  
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input  
                name="email" 
                type="email"  
                placeholder="your@email.com" 
                className="input input-bordered"  
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered"
                required 
              />
              <label className="label">
                <span className="label-text-alt">At least 6 characters with uppercase and lowercase</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button 
                className="btn bg-[#78cc44] hover:bg-[#78cc44] border-none text-white rounded-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
          <p className="text-sm flex items-center justify-center">
            Already have an account?
            <Link to="/login" className="text-[#78cc44] font-semibold hover:underline ml-1 whitespace-nowrap">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;