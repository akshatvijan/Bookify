import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SwiperSection = () => {
  const slides = [
    {
      id: 1,
      title: "Best Deals on Fiction Books",
      description: "Discover amazing discounts on top fiction titles.",
    },
    {
      id: 2,
      title: "Explore Business Collection",
      description: "Upgrade your skills with premium business books.",
    },
    {
      id: 3,
      title: "Adventure Awaits",
      description: "Dive into thrilling adventure stories today.",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Featured Highlights
      </h2>

      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gray-100 p-10 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">{slide.title}</h3>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;