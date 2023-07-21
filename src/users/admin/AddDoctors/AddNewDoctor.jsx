import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import storage from "../../../firebase/firebase.storage.config";

export const AddNewDoctor = () => {
    const [Bmdcx, SetBmdcx] = useState([]);
    useEffect(() => {
      axios
        .get("https://api-sastho-seba.onrender.com/doctorlist")
        .then((data) => SetBmdcx(data.data));
    }, []);

    const { logout, registerUser, SetUser, auth, updateProfile } = useAuth();
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState([]);
    const [progress, setProgress] = useState(0);
    const [presUrl, setPresUrl] = useState("");
    const navigate = useNavigate();
    const saveUser = (email, displayName, role) => {
      const user = { email, displayName, role };
      axios.post("https://api-sastho-seba.onrender.com/users/", user);
    };

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
    const handleUpload = () => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setPresUrl(url);
          });
        }
      );
    };
    const sendDataToServer = (data) => {
      axios.post("https://api-sastho-seba.onrender.com/doctorlist", data);
    };
    const onSubmit = (data) => {
      data.img = presUrl;
      registerUser(data.name, data.Mail, data.pass)
        .then((userCredential) => {
          const updatedUser = { email: data.Mail, displayName: data.name };
          SetUser(updatedUser);
          updateProfile(auth.currentUser, {
            displayName: data.name,
          }).then(() => {
            saveUser(data.Mail, data.name, "doctor");
            navigate("/home");
            logout();
          });
        })
        .catch((error) => {});
      data.pass = "";
      sendDataToServer(data);
      // notify();
    };
    return (
      <div>
        <h2 className=" mt-36 text-center font-bold text-5xl">
          Add Doctor
        </h2>
        <div className=" justify-between border-b border-gray-200 pb-16 mb-4"></div>
        <div className=" flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="xl:w-10/12 w-full px-8"
          >
            <div class="xl:px-24">
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Upload Doctor Image
                    </h1>
                  </div>

                  <p class="mt-4 text-sm leading-5 text-gray-600"></p>
                </div>
                <div>
                  <div className="">
                    <input
                      type="file"
                      onChangeCapture={handleChange}
                      placeholder="Prescription"
                    />
                    <button
                      className="btn bg-indigo-600"
                      variant="outline-primary"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                  <div className="d-flex">
                    <span>{progress === 0 ? "" : progress}</span>
                    <span>{progress === 0 ? "" : "% upload complete"}</span>
                  </div>
                </div>
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
                        Docotor Mail
                      </label>
                      <input
                        {...register("Mail", { required: true })}
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
                        Degree
                      </label>
                      <input
                        {...register("degree", { required: true })}
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
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Profession Information
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
                        Speciality
                      </label>
                      <input
                        {...register("speciality", { required: true })}
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
                        Visiting Houre
                      </label>
                      <input
                        {...register("time", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="recoverEmail"
                      >
                        Chember
                      </label>
                      <input
                        {...register("chember", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="recoveryEmail"
                        placeholder=""
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="altPhone"
                      >
                        Select Area
                      </label>
                      <select
                        class="w-full p-4 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        tabindex="0"
                        {...register("department", { required: true })}
                      >
                        <option value="Chest">Chest</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Psychaiatry">Psychaiatry</option>
                        <option value="General Physician">
                          General Physician
                        </option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Neuromedicine">Neuromedicine</option>
                        <option value="Gynaecology">Gynaecology</option>
                        <option value="Nutritionest">Nutritionest</option>
                        <option value="Eye">Eye</option>
                      </select>
                    </div>
                  </div>

                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        Fee
                      </label>
                      <input
                        {...register("fee", { required: true })}
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
                        Experience
                      </label>
                      <input
                        {...register("experience", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        BMDC-Registration Number
                      </label>
                      <input
                        {...register("bmdc", { required: true })}
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby=""
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
