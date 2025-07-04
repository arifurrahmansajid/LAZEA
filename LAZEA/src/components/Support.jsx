import React, { useState } from "react";

const Support = () => {
  const [form, setForm] = useState({ email: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your support ticket logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Support</h2>
        <p className="mb-8 text-gray-600 text-center">
          Need help? Submit your issue below and our support team will contact you soon.
        </p>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            Thank you for reaching out! Our support team will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Describe your issue</label>
              <textarea
                name="issue"
                value={form.issue}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                placeholder="Describe your problem or question..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#78cc44] hover:bg-[#66aa33] text-white font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Support;