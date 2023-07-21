import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


export const AddNewAmbulence = () => {

 

    const { logout, registerUser, SetUser, auth, updateProfile } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const saveUser = (email, displayName, role) => {
      const user = { email, displayName, role };
      axios.post("https://api-sastho-seba.onrender.com/users", user);
    };

 
    const sendDataToServer = (data) => {
      axios.post("https://api-sastho-seba.onrender.com/am/usr/data", data);
  };
  
  const onSubmit = (data) => {
      console.log(data);
      data.img = "";
      registerUser(data.name, data.mail, data.pass)
        .then((userCredential) => {
          const updatedUser = { email: data.mail, displayName: data.name };
          SetUser(updatedUser);
          updateProfile(auth.currentUser, {
            displayName: data.name,
          }).then(() => {
            saveUser(data.mail, data.name, "ambulence");
            logout();
          });
        })
        .catch((error) => {});
      data.pass = "";
      sendDataToServer(data);
    
    };
    return (
      <div>
        <h2 className=" mt-36 text-center font-bold text-5xl">
          Add Ambulence
        </h2>
        <div className=" justify-between border-b border-gray-200 pb-16 mb-4"></div>
        <div className=" flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="xl:w-10/12 w-full px-8"
          >
            <div class="xl:px-24">
            
              <div class="mt-16 lg:flex justify-between  mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-10 text-gray-800">
                      Ambulence Information
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
                        Name
                      </label>
                      <input
                        {...register("name", { required: true })}
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
                        Set Password
                      </label>
                      <input
                        {...register("pass", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Mail
                      </label>
                      <input
                        {...register("mail", { required: true })}
                        type="email"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder="youremail@example.com"
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        NID
                      </label>
                      <input
                        {...register("nid", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby=""
                        placeholder="Degree"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-16 lg:flex justify-between pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                     
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
                        Latitude
                      </label>
                      <input
                        {...register("lat", { required: true })}
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
                        Longitude
                      </label>
                      <input
                        {...register("long", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="mt-16 lg:flex justify-between pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                     
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
                        Contact No:
                      </label>
                      <input
                        {...register("cont_no", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby=""
                        placeholder=""
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4 ">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="securityCode"
                      >
                        Car Plate No:
                      </label>
                      <input
                        {...register("car_p_no", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <button type="submit" className="ml-[19rem] btn bg-indigo-700 w-80">
              register
            </button>
          </form>
        </div>
      </div>
    );
}
