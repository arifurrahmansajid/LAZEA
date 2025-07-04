import React from "react";
import { FaCalendarAlt, FaRegComment, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BlogSection = () => {
  const navigate = useNavigate();
  const articles = [
    {
      id: 1,
      title: "5 Signs You're Overwatering Your Plants",
      excerpt: "Learn to recognize the subtle symptoms before root rot sets in",
      date: "May 15, 2025",
      comments: 12,
      category: "Care Tips",
      image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500"
    },
    {
      id: 2,
      title: "Best Low-Light Plants for Dark Apartments",
      excerpt: "Thriving greenery even without direct sunlight",
      date: "April 28, 2025",
      comments: 8,
      category: "Plant Guides",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"
    },
    {
      id: 3,
      title: "DIY Natural Pest Control Solutions",
      excerpt: "Safe, chemical-free methods to protect your plants",
      date: "April 10, 2025",
      comments: 15,
      category: "DIY",
      image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=500"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-3 font-serif">
            Plant Care Blog
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Expert advice and inspiring stories for plant lovers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegComment className="mr-1" />
                    <span>{article.comments} comments</span>
                  </div>
                </div>

                <a href="#" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                  Read Article <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button  onClick={() => navigate("/notfound")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;