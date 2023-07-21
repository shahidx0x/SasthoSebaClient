import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MyAppointments = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  
  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.Email === user.email));
      });
  }, [morder, user.email]);
  return (
    <div className="">
      <div className="w-full  sm:px-6 mt-20">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Doctor Name</th>
                <th className="font-normal text-left pl-12">Patient Name</th>
                <th className="font-normal text-left pl-12">Patient Problem</th>
                <th className="font-normal text-left pl-16">Date</th>
                <th className="font-normal text-left pl-16">Status</th>
                <th className="font-normal text-left pl-16">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredData.map((ed) => (
                <Card key={ed._id} props={ed} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MyAppointments;

const Card = ({ props }) => {
  const [show, setShow] = useState(null);
  const handleDelete = (id) => {
    axios.delete(`https://api-sastho-seba.onrender.com/users-info/${id}`);
  }
  return (
    <>
      <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                alt=""
                className="w-full h-full"
                src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
              />
            </div>
            <div className="pl-4">
              <p className="font-medium">{props.Doctor}</p>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                {props.bmdc}
              </p>
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="font-medium">{props.Name}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">{props.Email}</p>
        </td>
        <td className="pl-12">
          <p className="font-medium">{props.detail || "Nothing here"}</p>
        </td>
        <td className="pl-12">
          <p className="font-medium">
            {props.apdate.slice(0, 9) || "Nothing here"}
          </p>
        </td>

        <td className="pl-16">
          <p>
            {(props.apstatus === "approved" && (
              <a
                className="text-yellow-400 font-bold"
                href={props.mz_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Meet
              </a>
            )) ||
              (props.apstatus !== "Paid" && (
                <a
                  className="text-indigo-400 font-bold"
                  href={`https://api-sastho-seba.onrender.com/payment/${props._id}/${
                    props.fee || 200
                  }/${props.Name}/${props.Email}/payDoc`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay Fee
                </a>
              )) || <span className="text-green-400 font-bold">Paid</span>}
          </p>
        </td>

        <td className="px-10 2xl:px-0">
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
            <div className="dropdown-content bg-white shadow w-24 absolute z-30 ml-14  ">
              <div
                onClick={() => handleDelete(props._id)}
                className="text-xs w-full hover:bg-red-700 py-4 px-4 cursor-pointer hover:text-white"
              >
                <p>Cancle</p>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};
