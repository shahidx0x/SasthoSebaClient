import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function MakeBooking() {
  const param = useParams();
  console.log(param);
  const { user } = useAuth();
  const navigate = useNavigate();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const payload = {
      name: data.n_one + " " + data.n_two,
      cont_no: data.cont,
      mail: user.email,
      amb_name: param.name,
      amb_mail: param.mail,
      amb_cont: param.cont,
      status:"paid",
      date: today,
  
    };
 
    axios
      .post("https://api-sastho-seba.onrender.com/am/rsv/data", payload)
      .then((res) =>
        res.status === 200
          ? navigate("/user/dashbord/reservation/ambulence")
          : console.log(res)
      );
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div class="xl:w-10/12 w-full px-8">
          <div class="xl:px-24">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mt-28 lg:flex justify-between border-b border-gray-200 pb-16 ">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                      ব্যক্তিগত তথ্য
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
                        First Name
                      </label>
                      <input
                        {...register("n_one")}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder="John"
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Last name
                      </label>
                      <input
                        {...register("n_two")}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        disabled
                        value={user.email}
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
                        Phone number
                      </label>
                      <input
                        {...register("cont")}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder="123-1234567"
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class=" lg:ml-0 md:w-64 md:ml-12 md:mt-0 mt-4">
                      <button className="btn btn-outline btn-primary">
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeBooking;
