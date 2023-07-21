import React from "react";
import { A11y, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {HiOutlineCurrencyBangladeshi} from "react-icons/hi"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowDimensions from "../../hooks/useWindowDiemsion";
import useMedicine from "../../hooks/useMedicine";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
const MedicineLayout = () => {
    const { width } = useWindowDimensions();
    const [medicine] = useMedicine();
    const {user} = useAuth();

  return (
    <div>
      <div className="mt-5">
        <h2 className="font-extrabold text-2xl py-5 px-32">
          Featured Category
        </h2>

        <div className="flex flex-wrap gap-5 ml-16">
        {medicine?.map((data) => (
            
            <FeatureMedCard key={data._id} props={data} user={user} />
        
        ))}
        
        </div>
      </div>
      
    </div>
  );
};

export default MedicineLayout;

const FeatureMedCard = ({props,user}) => {
    const addCarts = (data) => {
      const payload = Object.assign(data,{email : user.email})
    axios
      .post("https://api-sastho-seba.onrender.com/add/carts", { payload })
      .then((res) =>
        res.status === 200 ? console.log("OK"): console.log(res)
      );
  };
  return (
    <>
      <div className="mx-2 w-72 lg:mb-0 mb-8 border border-1 rounded-md">
        <div>
          <img src={props.data.med_img} className="w-full h-44" alt="" />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-yellow-500">NEW</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{props.data.med}</h2>
            </div>
            <p className="text-xs text-gray-600 mt-2">{props.data.med_d}</p>
            <div className="flex mt-4">
              <div className="pl-2">
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                onClick={() => addCarts(props.data)}
                className="text-indigo-700 btn btn-outline text-xs font-semibold"
              >
                SAVE
              </h2>
              <h3 className="text-indigo-400 text-xl font-semibold flex items-center gap-1">
                <HiOutlineCurrencyBangladeshi />
                {props.data.price}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
