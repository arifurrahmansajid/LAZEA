import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Nurture Your Green Friends",
      description: "Track watering, fertilizing, and health status for all your plants in one place. Never forget to care for them again!",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: 2,
      title: "Personalized Plant Care",
      description: "Get tailored reminders based on each plant's needs. From succulents to tropicals, we've got you covered.",
      image: "https://i.ibb.co/GQgB1NCK/R.jpg",
    },
    {
      id: 3,
      title: "Grow Your Indoor Jungle",
      description: "Discover expert tips to keep your plants thriving. Turn your space into a lush oasis with our guidance.",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        a11y={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop={true}
        className="w-full h-screen"
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center p-4">
                <button 
                  className="custom-prev absolute left-4 md:left-10 bg-white/80 hover:bg-white text-green-800 rounded-full p-3 z-20 transition-all"
                  aria-label="Previous slide"
                >
                  <FaArrowLeft size={20} />
                </button>
                
                <div className="text-center max-w-3xl px-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-lg md:text-xl mb-8 font-sans">
                    {slide.description}
                  </p>
                  <button onClick={() => navigate("/notfound")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors" >
                    Get Started
                  </button>
                </div>
                
                <button 
                  className="custom-next absolute right-4 md:right-10 bg-white/80 hover:bg-white text-green-800 rounded-full p-3 z-20 transition-all"
                  aria-label="Next slide"
                >
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;