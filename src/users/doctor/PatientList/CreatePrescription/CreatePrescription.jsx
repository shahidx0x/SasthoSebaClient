import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export const CreatePrescription = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const payload = {
      Prescriptions: data.Prescriptions,
      bmdc: state.bmdc,
      doctor: state.Doctor,
      patient: state.Name,
      pmail: state.Email,
    };
    axios
      .post("https://api-sastho-seba.onrender.com/pres-info", payload)
      .then((res) =>
        res.status === 200
          ? navigate("/doctor/dashbord/appointed-patient")
          : console.log(res)
      );
  };


  return (
    <>
      <div className="mt-20 flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} class="xl:w-10/12 w-full px-8">
          <div class="xl:px-24">
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Prescription for "{state.Name}"
                  </h1>
                </div>

                <p class="mt-4 text-sm leading-5 text-gray-600"></p>
              </div>
              <div></div>
            </div>
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Doctor information
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600"></p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      Doctor Name
                    </label>
                    <input
                      disabled
                      value={state.Doctor}
                      {...register("doctor", {  })}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="firstName"
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      BMDC
                    </label>
                    <input
                      disabled
                      value={state.bmdc}
                      {...register("bmdc", {  })}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="firstName"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div class="w-80">
                <div class="flex items-center">
                  <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                    {state.Name} Prscription
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600"></p>
              </div>
              <div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="password"
                    >
                      Patient Name
                    </label>
                    <input
                      disabled
                      value={state.Name}
                      {...register("patient", {  })}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby=""
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="securityCode"
                    >
                      Age
                    </label>
                    <input
                      disabled
                      value={state.Age}
                      {...register("time", {  })}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="securityCode"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div class="md:w-64">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="password"
                    >
                      Patient Email
                    </label>
                    <input
                      disabled
                      value={state.Email}
                      {...register("pmail", {  })}
                      type="name"
                      tabindex="0"
                      class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby=""
                      placeholder=""
                    />
                  </div>
                  <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      class="text-sm leading-none text-gray-800"
                      id="securityCode"
                    >
                      Advice and Add Drugs
                    </label>
                    <textarea
                      {...register("Prescriptions", { })}
                      placeholder="Rx"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="ml-[19rem] btn bg-indigo-700 w-80">
            Confirm Prescribe
          </button>
        </form>
      </div>
    </>
  );
};
