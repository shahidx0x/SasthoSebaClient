import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initializeAuthentication from "../../../firebase/firebase.init";
import useAuth from "../../../hooks/useAuth";
initializeAuthentication();
export const CustomerSignUp = () => {
   
  const MySwal = withReactContent(Swal);
  const { registerUser, SetUser, auth, updateProfile, logout } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const genRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://api-sastho-seba.onrender.com/users/", user);
  };
    const onSubmit = (data) => {
       
    const pass = data.password1;
    const pass2 = data.password2;
    const email = data.mail;
    const name = data.displayName;
    data.img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    const img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    if (pass !== pass2) {
      alert("Password Not Matched");
      return;
    }
    axios.post("https://api-sastho-seba.onrender.com/reg-user-info", data);
    registerUser(name, email, pass)
      .then((userCredential) => {
        const updatedUser = { email, displayName: name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img_url,
        }).then(() => {
          localStorage.setItem("isAuth", "true");
          saveUser(email, name);
          MySwal.fire({
            title: (
              <p>
                Signup Successfull
                <br />
                Please Login !
              </p>
            ),
            didOpen: () => {},
          }).then(() => {
            return logout();
          });
          navigate(location.state?.from || "/login");
        });
      })
      .catch((error) => {});
  };
 

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        localStorage.setItem("isAuth", "true");
        Navigate(location.state?.from || "/home");
      })
      .catch((error) => {});
  };
  return (
    <div>
          <div className="bg-gradient-to-b from-purple-600 to-indigo-700 w-full">
            <div className="w-full flex items-center justify-center min-h-screen ">
                <form  onSubmit={handleSubmit(onSubmit)} className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8 ">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700"> Registration form for User!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                              <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name"
                            
                            {...register("displayName", {})}
                           
                              />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                              <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address"
                              
                              {...register("mail", {})}
                          />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Contact Info</label>
                              <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name"
                              
                              {...register("contact", {})}
                             
                              />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Age</label>
                              <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name"
                              
                              {...register("Age", {})}
                             
                              />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Password</label>
                              <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name"
                              
                              {...register("password1", {})}
                             
                              />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Confirm Password</label>
                              <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name"
                            
                            {...register("password2", {})}
                              />
                        </div>
                    </div>
                   
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button type="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
