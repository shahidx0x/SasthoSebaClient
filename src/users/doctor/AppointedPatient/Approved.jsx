import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Approved() {
  const { state } = useLocation();
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();
  const updateStatus = (userId) => {
    const inputElement = document.getElementById("link");
    const inputValue = inputElement.value;
      const status = { apstatus: "approved", mz_link: inputValue };
    axios.put(`https://api-sastho-seba.onrender.com/users-info/${userId}`,status).then(res => res.status === 200 ? navigate("/doctor/dashbord/appointed-patient") : console.log(res));
  };
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onclick="popuphandler(false)"
          className="w-full h-full bg-gray-900 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Patient Information</p>
                <button
                  onclick="popuphandler(false)"
                  className="focus:outline-none"
                ></button>
              </div>
              <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                <div className="flex items-center justify-center">
                  <img
                    alt=""
                    src={state.url}
                    className="w-40 h-40 rounded-md "
                  />
                </div>
                <form className="mt-11">
                  <div className="flex items-center space-x-4">
                    <p>Name</p>
                    <input
                      disabled
                      placeholder={state.Name}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                    <p>Problem</p>
                    <input
                      disabled
                      placeholder={`${state.detail}`}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <p>Give Meet/Zoom Link</p>
                    <input
                      id="link"
                      placeholder="Enter Link"
                      type=""
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-8">
                    <button className="btn bg-indigo-700">
                      <a
                        href="https://meet.google.com/new"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Generate Meet Link
                      </a>
                    </button>
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={() =>
                      navigate("/doctor/dashbord/appointed-patient")
                    }
                    className="px-6 py-3 bg-red-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Cancle
                  </button>
                  <button onClick={() => updateStatus(state._id)} className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approved;
