import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const AddMedicine = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notify = () => toast("Medicine Added");
  const error = () => toast("Failed");
  const onSubmit = (data) => {
    data.owner = user.email;
    data.dname = user.displayName;
    axios.post("https://api-sastho-seba.onrender.com/add/medicine", { data }).then((res) => {
      if (res.status === 200) {
        notify();
        navigate("/store/manage/medicine");
      } else {
        error();
      }
    });
  };

  return (
    <div>
      <h2 className=" mt-24 mb-10 text-center font-bold text-5xl">
        Add Medicine
      </h2>

      <div className="flex items-center justify-center">
        <ToastContainer />
        <div class="xl:w-10/12 w-full px-8 border-t border-gray-200 ">
          <div class="xl:px-24">
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
              <div class="w-full">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2  text-gray-800">
                    Add Medicine Information
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600"></p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      Medicine Name
                    </label>
                    <input
                      {...register("med", {})}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="firstName"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Medicine Type
                    </label>
                    <input
                      {...register("med_t", {})}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="lastName"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="emailAddress"
                    >
                      Description
                    </label>
                    <input
                      {...register("med_d", {})}
                      type="text"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="emailAddress"
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="phone"
                    >
                      Price
                    </label>
                    <input
                      {...register("price", {})}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="phone"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 mt-8">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="emailAddress"
                    >
                      Image Address
                    </label>
                    <input
                      {...register("med_img", {})}
                      type="img"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="emailAddress"
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <button className="mt-5 btn btn-outline btn-primary">
                      Add Medicine
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
