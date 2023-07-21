import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";

function StoreRequest() {
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // res.data === "Error sending email" ? setErr(res.data) : setMsg(res.data)
  const onSubmit = (data) => {
    data.reg_count = 2;
    data.mail = "admn.sasthoseba@gmail.com";
    data.reg_type = "Store Registration";
    axios
      .post("https://api-sastho-seba.onrender.com/send-email", data)
        .then((res) => {
        res.data === "Error sending email"
          ? setErr(res.data)
          : setMsg(res.data);
        MySwal.fire({
          title: (
            <p>
              {res.data}
              <br />
              {msg && "Wait for admin confirmation"}
            </p>
          ),
          didOpen: () => {},
        }).then(() => {
          return navigate(location.state?.from || "/login");
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gradient-to-b from-purple-600 to-indigo-700  w-full">
      <div className="w-full flex items-center justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8 "
        >
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Request Registration
            <br /> form
            <br /> for Pharmecy owner!
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
                {...register("name", {})}
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
                {...register("reg_mail", {})}
              />
            </div>
          </div>

          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Store Location
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
                {...register("store_loc", {})}
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Store Contact No
              </label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
                {...register("store_cont", {})}
              />
            </div>
          </div>
         

          <p className="text-xs leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreRequest;
