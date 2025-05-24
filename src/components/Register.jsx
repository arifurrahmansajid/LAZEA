import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

const Register = () => {
  const [ error, setError ] = useState([]);
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const auth = getAuth();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({name, photo, email, password})

    if (name.length < 5) {
      setError({...error, name: "Name must be more than 5 characters long."});
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must have at least one uppercase, one lowercase letter, and be at least 6 characters long.");
      return;
    } else {
      toast.success("Register in successfully!")
    };

    createNewUser(email, password)
    .then((res) => {
      setUser(res.user)
      updateUserProfile(auth.currentUser,{displayName: name, photoURL: photo})
      .then(() => {
        navigate('/');
      }).catch(err => console.log(err));
    })
    .catch((err) => console.log(err.message));

    console.log(name, email, password, photo);
 };

  const handleGoogleSignIn = () => {
    logInWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate('/');
    })
    .catch(error => console.log('ERROR', error.message))
  }

  const handleGithubSignIn = () => {
    logInWithGithub()
    .then(result => {
      console.log(result.user);
      navigate('/');
    })
    .catch(error => console.log('ERROR', error.message))
  }

  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 rounded p-10">
          <h2 className="text-3xl text-center font-bold"> Register </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <button 
            onClick={handleGoogleSignIn} 
            type="button" className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold border border-gray-300 rounded-md bg-transparent hover:text-white hover:bg-orange-600 dark:hover:border-orange-600 focus:outline-none">
              <div className="text-xl"> <FaGoogle></FaGoogle> </div>
              Continue with google
            </button>
            <button 
            onClick={handleGithubSignIn} 
            type="button" className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold border border-gray-300 rounded-md bg-transparent hover:text-white hover:bg-orange-600 dark:hover:border-orange-600 focus:outline-none">
              <div className="text-xl"> <FaGithub></FaGithub> </div>
              Continue with github
            </button>
            <div className="mt-6 flex items-center gap-4">
              <hr className="w-full" />
              <p className="text-sm text-center">or</p>
              <hr className="w-full" />
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text dark:text-white"> Name </span> </label>
              <input 
                name="name" 
                type="text" 
                placeholder="name" 
                className="input input-bordered" 
                required
              />
              {
                error.name && <label className="label text-xs text-red-600">
                  {error.name}
                </label>
              }
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text dark:text-white"> Photo URL </span></label>
              <input 
                name="photo" 
                type="text"  placeholder="photo-url" className="input input-bordered" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text dark:text-white"> Email </span> </label>
              <input  
                name="email" 
                type="email"  
                placeholder="email" className="input input-bordered"  
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white"> Password </span>
              </label>
              <input 
                name="password"
                type="password" placeholder="password" className="input input-bordered"
                required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 hover:bg-orange-500 border-none text-white rounded-md"> Register </button>
            </div>
          </form>
          <p className="text-sm flex items-center justify-center"> Already Have An Account?
            <Link to="/login" className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap"> Login here </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;