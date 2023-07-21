import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const AppointedPatient = () => {
  const { user } = useAuth();
  const [userinfo, setUserInfo] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [show, setShow] = useState(null);
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        setFIlteredData(
          userinfo.filter((usr) => usr.Doctor === user.displayName)
        );
      });
  }, [userinfo, filteredData, user.displayName]);

  return (
    <div className="ml-5 mt-5">
      <div>
        {filteredData.length === 0 ? (
          <div className="alert alert-warning shadow-lg mt-20">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>No Apoinment data found!</span>
            </div>
          </div>
        ) : (
          <div className="mt-10 w-full sm:px-6">
            <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
              <div className="sm:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Appointed Patient List
                </p>
                <div></div>
              </div>
            </div>
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="h-16 w-full text-sm leading-none text-gray-800">
                    <th className="font-bold text-left pl-4">Patient Name</th>
                    <th className="font-bold text-left pl-12">
                      Doctor Details
                    </th>
                    <th className="font-bold text-left pl-12">Gender</th>
               
                    <th className="font-bold text-left pl-20">Issue</th>
                    <th className="font-bold text-left pl-20">Status</th>
                    <th className="font-bold text-left pl-20">Action</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {filteredData.map((data) => (
                    <AppointPatientCard key={data._id} props={data} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AppointPatientCard = ({ props }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to cancel appointment ?"
    );
    if (isDelete) {
      fetch(`https://api-sastho-seba.onrender.com/users-info/${id}`, {
        method: "DELETE",
      });
    }
  }
  const trnsFer = () => {
    navigate("/doctor/dashbord/approved",{state:props});
  }
  const trnsFerPS = () => {
     navigate("/doctor/crps", { state: props });
  }
  return (
    <>
      <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <Zoom>
                <img
                  alt=""
                  className="w-full h-full"
                  src={
                    props.url ||
                    "https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                  }
                />
              </Zoom>
            </div>
            <div className="pl-4">
              <p className="font-medium">{props.Name}</p>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                {props.Email}
              </p>
            </div>
          </div>
        </td>
        
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800">
            {props.Doctor}
          </p>

          <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
            <p>{props.bmdc}</p>
          </div>
        </td>

        <td className="pl-12">
          <p className="font-medium">{props.gender}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">
            Age :{props.Age}
          </p>
        </td>

        <td className="pl-20">
          <p className="font-medium">{props.detail}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">{}</p>
        </td>

        <td className="pl-20">
          <p className="font-medium">{props.apstatus || "Not Set"}</p>
        </td>

        <td className="px-16 2xl:px-16">
          {show === 0 ? (
            <button
              onClick={() => setShow(null)}
              className="focus:outline-none pl-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setShow(0)}
              className="focus:outline-none pl-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          {show === 0 && (
            <div className="dropdown-content bg-white shadow w-36 absolute z-30  ">
              <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                {props.apstatus === "approved" ? (
                  <p onClick={() => trnsFerPS()}>Create Prescription</p>
                ) : (
                  <p onClick={() => trnsFer()}>Approve</p>
                )}
              </div>

              <div
                onClick={() => handleDelete(props._id)}
                className="text-xs w-full hover:bg-red-700 py-4 px-4 cursor-pointer hover:text-white"
              >
                <p>Reject</p>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};
