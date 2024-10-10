import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl mb-20 font-bold">Testimonial</h1>
      <Swiper
        centeredSlides={true}
        slidesPerView={2}
        modules={[Navigation]}
        className=""
      >
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <SwiperSlide className="">
            <div className="container border-0 shadow-lg cursor-pointer rounded-2xl p-5 border-red-500  flex items-center">
              <img
                src="https://i.ibb.co/DzB6Lc9/vue.png"
                className="w-20 h-20 mr-2 hidden md:block"
              />
              <div className="mx-5">
                <h1 className="text-xl">Tanner Potter</h1>
                <h3 className="text-md text-gray-500">CEO, Onnorokom Group</h3>
                <p className="text-sm mt-4">
                  This is very awesome product I like it so much
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
