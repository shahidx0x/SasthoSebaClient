// import Swiper core and required modules
import { Autoplay,A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export const Carosule = () => {

  return (
    <>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="">
              <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                <div className="z-30 relative lg:w-1/2">
                  <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                    <div className="w-full lg:w-auto lg:-mr-32">
                      <img
                        src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                        alt="image with decent chairs"
                        className="w-[35rem] relative z-30 lg:pl-20 px-14 py-14"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
                  <div className="w-full h-full lg:hidden">
                    <img
                      src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                      alt="image with decent chairs"
                      className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                  <div>
                    <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                      Modern Interior Decor
                    </h1>
                    <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                      Get inspired by our curated selection of luxiwood
                      interiors. We hope get inspired to have luxiwood interior
                      yourself. You’ll find tips here where you can buy a lot of
                      cool furniture,decorations, plants, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                  <div>
                    <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                      Modern Interior Decor
                    </h1>
                    <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                      Get inspired by our curated selection of luxiwood
                      interiors. We hope get inspired to have luxiwood interior
                      yourself. You’ll find tips here where you can buy a lot of
                      cool furniture,decorations, plants, etc.
                    </p>
                  </div>
                </div>
                <div className="z-30 relative lg:w-1/2">
                  <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                    <div className="w-full lg:w-auto lg:-mr-32">
                      <img
                        src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                        alt="image with decent chairs"
                        className="w-[35rem] relative z-30 lg:pl-20 px-14 py-14"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
                  <div className="w-full h-full lg:hidden">
                    <img
                      src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                      alt="image with decent chairs"
                      className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                <div className="z-30 relative lg:w-1/2">
                  <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                    <div className="w-full lg:w-auto lg:-mr-32">
                      <img
                        src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                        alt="image with decent chairs"
                        className="w-[35rem] relative z-30 lg:pl-20 px-14 py-14"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
                  <div className="w-full h-full lg:hidden">
                    <img
                      src="https://www.shakti.org.bd/assets/media/045e7e0b4eab13a3c3ecd7b6bd401f41.jpg"
                      alt="image with decent chairs"
                      className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                  <div>
                    <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                      Modern Interior Decor
                    </h1>
                    <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                      Get inspired by our curated selection of luxiwood
                      interiors. We hope get inspired to have luxiwood interior
                      yourself. You’ll find tips here where you can buy a lot of
                      cool furniture,decorations, plants, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
