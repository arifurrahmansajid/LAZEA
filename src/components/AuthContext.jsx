import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const logInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if (user) {
        toast.success("Logged in with Google!");
      }
      return result;
    } catch (error) {
      toast.error("Failed to log in with Google: " + error.message);
    }
  };
  
  const logInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      toast.success("Logged in with GitHub!");
      return result;
    } catch (error) {
      toast.error("Failed to log in with GitHub: " + error.message);
    }
  }

  const userLogin = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    // .then((res) => {
    //   toast.success("Logged in successfully!");
    //   return res;
    // })
    // .catch((err) => {
    //   toast.error("Login failed: " + err.message);
    // })
    // .finally(() => setLoading(false));
  };

  // const logOut = async () => {
  //   setLoading(true);
  //   try {
  //     try {
  //       await signOut(auth);
  //       toast.success("Logged out successfully!");
  //     } catch (err) {
  //       toast.error("Logout failed: " + err.message);
  //     }
  //   } finally {
  //     return setLoading(false);
  //   }
  // };
  const logOut =() => {
    setLoading(true);
    return signOut(auth);
  };

  // const updateUserProfile = (updatedData) => {
  //   if (!auth.currentUser) {
  //     toast.error("No user is logged in.");
  //     return;
  //   }
  
  //   updateCurrentUser(auth, updatedData)
  //     .then(() => {
  //       toast.success("Profile updated successfully!");
  //     })
  //     .catch((error) => {
  //       toast.error("Failed to update profile: " + error.message);
  //     });
  // };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  };

  const authInfo = {
    user, 
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    logInWithGoogle,
    logInWithGithub
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('steate', currentUser);
      setLoading(false);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;