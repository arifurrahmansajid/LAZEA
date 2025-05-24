import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {

  const slides = [
    {
      id: 1,
      title: "Explore Premium Sports Equipment",
      description: "Discover top-quality sports gear for all activities. Get the best equipment designed for performance and durability, ensuring you excel in every game or workout.",
    },
    {
      id: 2,
      title: "Unmatched Performance & Durability",
      description: "Gear up with our premium range of sports equipment tailored to elevate your skills. Built to last and perform under the toughest conditions.",
    },
    {
      id: 3,
      title: "Your Partner in Fitness Journey",
      description: "From beginner to pro, our equipment supports every level of your fitness journey. Upgrade your collection and achieve your goals with ease.",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
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
            <div className="relative w-full h-full bg-center">
              <img src="" alt="" />
              <div className="absolute inset-0 text-white bg-orange-600 flex items-center justify-between p-4">
                <button className="custom-prev bg-white dark:bg-black rounded-full text-orange-500 p-2"> <FaArrowLeft /> </button>
                <div className="w-2/4 text-center">
                  <h2 className="text-5xl mb-5 font-bold font-font"> {slide.title} </h2>
                  <p className="mt-2 text-sm font-poppins"> {slide.description} </p>
                </div>
                <button className="custom-next bg-white dark:bg-black rounded-full text-orange-500 p-2"> <FaArrowRight /> </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;