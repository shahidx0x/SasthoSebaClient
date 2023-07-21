/* eslint-disable jsx-a11y/img-redundant-alt */
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MedicineHero from "../MedicineHero/MedicineHero";
import MedicineLayout from "../MedicineLayout/MedicineLayout";

export const MedicineCarosule = () => {
  return (
    <div>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <MedicineHero />
          </SwiperSlide>
        

        </Swiper>
    
      </div>
      <MedicineLayout/>
    </div>
  );
};
