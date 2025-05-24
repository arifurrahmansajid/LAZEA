import React, { useState } from "react";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ForgetPassword = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    setLoading(true);
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset email sent! Please check your inbox.");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title> Forget Password </title>
      </Helmet>
      <div className="p-8 shadow-md rounded-md w-full border max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2"> Email Address </label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 text-black" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="button" onClick={handleReset} className={`w-full py-2 px-4 text-white bg-orange-600 hover:bg-orange-500 rounded-md text-lg font-semibold ${ loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;