import axios from "axios";
import React, { useState } from "react";
import ErrorHandlisng from "../../../components/ErrorHandling/ErrorHandlisng";
import useMedicine from "../../../hooks/useMedicine";
import useAuth from "../../../hooks/useAuth";

const ManageMedicine = () => {
  const [medicine] = useMedicine();
  const { user } = useAuth();
  medicine?.filter(data => data.data.owner === user.email).map(data => console.log(data))
  return (
    <div>
      <div className="w-[85rem] overflow-auto sm:px-6 mt-16">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Store Medicine List
            </p>
            <div></div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">ID</th>
                <th className="font-normal text-left pl-12">Name</th>
                <th className="font-normal text-left pl-12">Category</th>
                <th className="font-normal text-left pl-20">Description</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {medicine.length === 0 ? (
                <ErrorHandlisng props={{ name: "No Data Found" }} />
              ) : (
                medicine
                  ?.filter((data) => data.data.owner === user.email)
                  .map((each_user) => (
                    <TableRow key={each_user._id} props={each_user} />
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMedicine;

const TableRow = ({ props }) => {
  console.log(props);
  const [show, setShow] = useState(null);
  const handleDelete = (id, email) => {
    axios.delete(`https://api-sastho-seba.onrender.com/medicine/${id}`);
    window.location.reload();
  };
  return (
    <>
      <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                className="w-full h-full"
                src={
                  props.data.med_img ||
                  "https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                }
                alt=""
              />
            </div>
            <div className="pl-4">
              <p className="font-medium">{props._id}</p>
              <p className="text-xs leading-3 text-gray-600 pt-2">Product ID</p>
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800">
            {props.data.med}
          </p>
          <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
            <div className="w-20 h-3 bg-green-progress rounded-full" />
          </div>
        </td>
        <td className="pl-12">
          <p className="font-medium">{props.data.med_t}</p>
        </td>
        <td className="pl-20">
          <p className="font-medium">{props.data.med_d}</p>
        </td>

        <td className="px-7 2xl:px-0">
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
            <div className="dropdown-content bg-white shadow w-24 absolute z-30 ml-20">
            
              <div className="text-xs w-full hover:bg-red-700 py-4 px-4 cursor-pointer hover:text-white">
                <p onClick={() => handleDelete(props._id, props.email)}>
                  Delete
                </p>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};
