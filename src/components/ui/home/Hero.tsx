import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = ["Camping", "Tenting", "Caravan"];

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-max m-10">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletClass: "hidden",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full md:w-1/2 "
      >
        {data.map((elm) => (
          <SwiperSlide>
            <h1 className="text-lg md:text-5xl font-black text-neutral my-5">
              {elm}
            </h1>
            <p className="text-base md:text-3xl font-semibold text-black">
              Create your dream campsite with our camping essentials. Under the
              stars, every night is an adventure waiting to unfold.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full md:w-1/2 p-8 md:p-10 ">
        <img
          src="https://contents.mediadecathlon.com/p2502043/k$10d2b647afff59ed0a6c01ac718e27f0/2502043_default.jpg?format=auto&f=969x0"
          className="rounded-2xl border-secondary border-8 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
