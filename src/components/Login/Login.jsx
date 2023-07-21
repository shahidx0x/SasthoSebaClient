import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
/* eslint-disable jsx-a11y/anchor-is-valid */
initializeAuthentication();
export const Login = () => {
  const MySwal = withReactContent(Swal);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, resetPassword } = useAuth();

 
  const forgotPassword = () => {
    MySwal.fire({
      title: 'Enter Your Email To Reset',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Reset',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
          resetPassword(email)
          .then(() => Swal.fire(`Reset link sent to ${email}`))
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => Swal.isLoading()}).then(() => {
        Swal.fire('<div class="flex justify-center items-center"> <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600"></div></div>')
    })  
  };
  const onSubmit = (data) => {
    login(data.mail, data.pass).then((res) => {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    });
    navigate("/home");
  };

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("isAuth", "true");
        navigate("/home");
      })
      .catch((error) => {});
  };
  const backgroundStyle = {
    backgroundImage:
      "url('https://c1.wallpaperflare.com/preview/688/137/178/drugs-medicine-medication-pills.jpg')",
    backgroundColor: "rgba(0, 0, 0.90, 0.90)",
    backgroundBlendMode: "multiply",
  };

  return (
    <div>
      <div
        style={backgroundStyle}
        class="hero min-h-screen bg-white text-white"
      >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">এখনই লগইন করুন!</h1>
            <p class="py-6">
              আমরা একটি সহজ ও সুরক্ষিত লগইন পদ্ধতি সরবরাহ করছি। এখনই লগইন করুন
              এবং সুবিধাজনক অভিজ্ঞতা উপভোগ করুন।
            </p>
          </div>
          <div class="card w-full lg:w-[30rem] h-[23rem] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">Email</span>
                </label>
                <input
        
                  type="text"
                  placeholder="email"
                  class="input input-bordered text-black font-mono"
                  {...register("mail", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text  font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered text-black"
                  {...register("pass", {})}
                />
                <label class="label">
                  <p onClick={() => forgotPassword()}  className="label-text-alt link link-hover  font-bold">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn  bg-cyan-600">
                  Login
                </button>
                {/* <button onClick={handleGoogle} class="btn btn-success  mt-3">
                  Login with Google
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
