import React, { useState } from "react";
import { FaPaperPlane, FaCheck, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-700 to-green-800 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <FaLeaf className="text-4xl mx-auto mb-4 text-green-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">
            Join Our Green Community
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Get monthly plant care tips, exclusive offers, and early access to new products
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-green-300/30"
          >
            <div className="flex flex-col items-center">
              <div className="bg-green-500 rounded-full p-3 mb-4">
                <FaCheck className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-green-100 mb-4">
                You've been added to our newsletter list.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-green-300 hover:text-white underline text-sm"
              >
                Subscribe another email
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-1 shadow-xl max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-500 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  isLoading
                    ? "bg-green-700 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white min-w-[150px]`}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <FaPaperPlane /> Subscribe
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-green-200 text-sm mt-6"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;