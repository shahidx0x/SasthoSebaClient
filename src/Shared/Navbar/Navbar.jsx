import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
  const { user, logout, admin, doctor, ambulence, store } = useAuth();
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userCarts] = useCarts();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        class={` ${
          scrollPosition > 100 && ` shadow-gray-400 shadow-sm`
        } navbar fixed z-30 bg-base-100`}
      >
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
               <img className="w-44" src="./logo.png" alt="" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/medicine">Medicine</Link>
              </li>
              <li className="dropdown">
                <label tabindex="0" class="">
                  Our Doctors <span> </span>
                </label>
                <ul
                  tabindex="0"
                  class=" menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64 z-10"
                >
                  <li>
                    <a href="/doctors/chest">Chest</a>
                  </li>
                  <li>
                    <a href="/doctors/Medicine">Medicine</a>
                  </li>
                  <li>
                    <a href="/doctors/Eye">Eye</a>
                  </li>
                  <li>
                    <a href="/doctors/Dermatology">Dermatology</a>
                  </li>
                  <li>
                    <a href="/doctors/Psychaiatry">Psychaiatry</a>
                  </li>
                  <li>
                    <a href="/doctors/General Physician">General Physician</a>
                  </li>
                  <li>
                    <a href="/doctors/Diabetes">Diabetes</a>
                  </li>
                  <li>
                    <a href="/doctors/Neuromedicine">Neuromedicine</a>
                  </li>
                  <li>
                    <a href="/doctors/Gynaecology">Gynaecology</a>
                  </li>
                  <li>
                    <a href="/doctors/Nutritionest">Nutritionest</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <img className="lg:w-20 hidden lg:block" src="./logo.png" alt="" />
            <h2 className="ml-3 hidden lg:block">স্বাস্থ্য সেবা</h2>
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/medicine-shop">Medicine</Link>
            </li>
            <li>
              <Link to="/ambulance">Ambulance</Link>
            </li>
            <li className="dropdown">
              <label tabindex="0" class="">
                Our Doctors
              </label>
              <ul
                tabindex="0"
                class=" menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64 z-10"
              >
                <li>
                  <a href="/doctors/Chest">Chest</a>
                </li>
                <li>
                  <a href="/doctors/Medicine">Medicine</a>
                </li>
                <li>
                  <a href="/doctors/Eye">Eye</a>
                </li>
                <li>
                  <a href="/doctors/Dermatology">Dermatology</a>
                </li>
                <li>
                  <a href="/doctors/Psychaiatry">Psychaiatry</a>
                </li>
                <li>
                  <a href="/doctors/General Physician">General Physician</a>
                </li>
                <li>
                  <a href="/doctors/Diabetes">Diabetes</a>
                </li>
                <li>
                  <a href="/doctors/Neuromedicine">Neuromedicine</a>
                </li>
                <li>
                  <a href="/doctors/Gynaecology">Gynaecology</a>
                </li>
                <li>
                  <a href="/doctors/Nutritionest">Nutritionest</a>
                </li>
              </ul>
            </li>
            <li>
            <HashLink smooth to="/home/#contact-us">Contact Us</HashLink>
            </li>
        
            {/* <li>
              <Link to="/about">About Us?</Link>
            </li> */}
           
          </ul>
        </div>

        <div class="navbar-end">
          {Object.keys(user).length !== 0 ? (
            <div className="flex gap-5">
              <div class="dropdown">
                <label tabindex="0" class="">
                  <div class="avatar">
                    <div class=" animate-pulse w-12 rounded-full">
                      <img
                        src={
                          user.photoURL ||
                          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt="profile"
                      />
                      Dashbord
                    </div>
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="mt-3 dropdown-content menu p-2 shadow bg-base-100 w-72 ml-[-250px]"
                >
                  <li>
                    <h2 for="my-modal" className="">
                      <FcBusinessman />
                      {user.displayName}
                    </h2>
                  </li>

                  {Object.keys(user).length !== 0 && admin.admin === true ? (
                    <>
                      <li>
                        <Link
                          to="admin/dashbord/usrmanage"
                          for="my-modal"
                          className=""
                        >
                          <FcBusinessman />
                          Admin Dashbord
                        </Link>
                      </li>
                    </>
                  ) : null}
                   {Object.keys(user).length !== 0 && ambulence.ambulence === true ? (
                    <>
                      <li>
                        <Link
                          to="ambulence/dashbord/usr-req"
                          for="my-modal"
                          className=""
                        >
                          <FcBusinessman />
                          Ambulence Dashbord
                        </Link>
                      </li>
                    </>
                  ) : null}
                    {Object.keys(user).length !== 0 && store.store === true ? (
                    <>
                      <li>
                        <Link
                          to="store/manage/medicine"
                          for="my-modal"
                          className=""
                        >
                          <FcBusinessman />
                          Store Dashbord
                        </Link>
                      </li>
                    </>
                  ) : null}
                  {Object.keys(doctor).length !== 0 ? (
                    <div>
                      <li>
                        <Link to="doctor/dashbord/appointed-patient">
                          <h2 for="my-modal" className="">
                            <FcBusinessman /> Dashbord
                          </h2>
                        </Link>
                      </li>
                    </div>
                  ) : null}
                  {Object.keys(doctor).length === 0 &&
                  Object.keys(admin).length === 0 ? (
                    <>
                      <li>
                          {
                            ambulence.ambulence === true || store.store === true ? (<></>) : ( <Link to="user/dashbord/my-appoinments">
                            <h2 for="my-modal" className="">
                              <FcBusinessman />
                              My Dashbord
                            </h2>
                          </Link>)
                       }
                      </li>
                      <li></li>
                    </>
                  ) : null}
                  <li>
                    <label
                      for="my-modal"
                      className="text-rose-600 modal-button"
                      onClick={() => logout()}
                    >
                      <BiLogOut />
                      Logout
                    </label>
                  </li>
                </ul>
              </div>
              <Link
                to="/user/dashbord/my-carts"
                className={
                  admin.admin || doctor.doctor || ambulence.ambulence || store.store
                    ? `hidden`
                    : `btn gap-2 rounded-full bg-black`
                }
              >
                Carts
                <div className="badge badge-secondary">
                  {
                    userCarts?.filter((e) => e.payload.email === user.email)
                      .length
                  }
                </div>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-8 py-3 m-2 text-sm lg:text-lg border rounded-md bg-cyan-600 text-white font-bold border-gray-300 hover:bg-white hover:text-black">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-8 py-[0.18rem] lg:py-3 m-2 text-sm lg:text-lg border rounded-md text-black font-bold border-gray-300  hover:bg-cyan-600 hover:text-white hover:rounded-lg"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

