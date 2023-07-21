import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const PaymentSuccess = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [tempRes, setTmpRes] = useState();
  useEffect(() => {
    axios
      .get(`https://api-sastho-seba.onrender.com/carts/email/${user.email}`)
      .then((res) => res.status === 200 && setTmpRes(res.data));
  });
  console.log("this is",tempRes);

  const clearCart = () => {
    axios
      .post("https://api-sastho-seba.onrender.com/add/payment-history", tempRes)
      .then((res) =>
        res.status === 200
          ? axios
              .delete(`https://api-sastho-seba.onrender.com/carts/clear/${user.email}`)
              .then((res) =>
                res.status === 200
                  ? navigate("/user/dashbord/order-summery")
                  : console.log(res)
              )
          : console.log(res)
      );
  };
  return (
    <div>
      <div>
        {show && (
          <div
            className=" mt-14 py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-center text-green-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width={56}
                    height={56}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={9} />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                  Payment Processing Successful
                </h1>
                <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                  Thank you for your payment. An automated payment receipt will
                  be sent to your email. Check the action below for more
                  details.
                </p>
                <div className="flex items-center justify-center w-full">
                  <button
                    
                    onClick={() => clearCart()}
                    className={tempRes?.length !==0 ? " focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" : "hidden"}
                  >
                    Go back to Order Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
