import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import storage from "../../../firebase/firebase.storage.config";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Prescription = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [presUrls, setPresUrls] = useState([]);
  const [serData, setSerData] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("No Info Available");

  useEffect(() => {
    fetch("https://api-sastho-seba.onrender.com/pres-img")
      .then((res) => res.json())
      .then((data) => {
        setSerData(data);
        setFilteredData(serData.filter((data) => data.owner === user.email));
      });
  }, [user.email, serData]);
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const handleUpload = () => {
    const promises = [];
    images.forEach((image) => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
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
          getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
            setPresUrls((ps) => [...ps, urls]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  };

  const s2ser = (name, url) => {
    axios.post("https://api-sastho-seba.onrender.com/pres-img", {
      context: title,
      owner: name,
      img: url,
    });
  };
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const onSubmit = (data) => {
    setTitle(data.context);
  };
  const handleview = async () => {
    presUrls.forEach((url) => {
      s2ser(user.email, url);
    });
    await delay(1000);
    window.location.reload(false);
  };
  return (
    <div className="ml-5 mt-20">
  
      <div>
        <div className="">
          <form
            className="slide-in-elliptic-top-fwd"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h5 className="font-bold">Upload Your Medical Data</h5>
            <div className=" flex flex-col mt-3">
              <input
                className="w-80 mb-3 rounded-md"
                type="text"
                placeholder="Context of Prescription"
                {...register("context", {})}
              />
              <input
                className="file-input w-full max-w-xs"
                accept="image/*"
                type="file"
                multiple
                onChangeCapture={handleChange}
                placeholder="Prescription"
              />
            </div>
            <div className="d-flex">
              <span>{progress === 0 ? "" : progress}</span>
              <span>{progress === 0 ? "" : "% upload complete"}</span>
            </div>
            <br />
            <button
              className=" btn btn-primary p-3 roll-in-left"
              variant="primary"
              type="Submit"
              onClick={handleUpload}
            >
              Upload Prescription
            </button>
            <button
              className=" text-white ml-3 p-3 btn btn-success"
              onClick={handleview}
            >
              Refresh
            </button>
          </form>
        </div>
      </div>
      <div>

        <div class="p-[60px] bg-slate-50">
          <div class="flex items-center justify-center">
            <div class="container">
              <div class="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-white p-2 lg:grid-cols-4 w-full h-full">
                <div class="flex gap-4 w-[50rem] flex-wrap">
              
                  {filterdData?.map((data) => (
                    <MUC key={data._id} data={data}/> 
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;

const MUC = (props) => {
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are you sure , you want to delete ?");
    if (isDelete) {
      fetch(`https://api-sastho-seba.onrender.com/pres-img/${id}`, {
        method: "DELETE",
      });
      console.log("deleted");
    }
  };
  return (
    <div>
      <Zoom>
        <img
          src={props.data.img}
          class="h-56 w-56"
          alt="Nasi lemak cover"
        />
      </Zoom>
      <div>
          <p>{props.data.context}</p>
              <button
                  className="btn-outline btn-error p-3 border-indigo-200 border-2 rounded-lg"
            onClick={() => {
              handleDelete(props.data._id);
            }}
    
          >
            Delete
          </button>
        </div>
    </div>
  );
};
