/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { BiRightArrow } from "react-icons/bi";

const UserDashbord = () => {
    const { user,logout } = useAuth();
    let activeClassName =
    "bg-indigo-700 text-gray-100 w-72 p-3   flex items-center p-2 space-x-3";
  let active =
    "mt-2 bg-indigo-700 text-gray-100 w-72 p-3  rounded-2xl flex items-center p-2 space-x-3";
  return (
    <>
      <aside class="flex flex-col w-80 h-screen px-4 py-8  bg-white border-r rtl:border-r-0 rtl:border-1">
        <a href="#" class="mx-auto">
          <img class="w-auto h-6 sm:h-7" src={user.photoURL} alt="" />
        </a>

        <div class="flex flex-col items-center mt-6 -mx-2">
          <img
            class="object-cover w-24 h-24 mx-2 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
          <h4 class="mx-2 mt-2 font-medium text-gray-800">
            {user.displayName}
          </h4>
          <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavLink
              to="my-appoinments"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : " p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Appoinments</span>
            </NavLink>
            <NavLink
              to="reservation/ambulence"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : " p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Reserved Ambulence</span>
            </NavLink>
            <NavLink
              to="my-prescription"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "  p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Prescription</span>
            </NavLink>
            <NavLink
              to="my-emedic-prescription"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "  p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Emedic-Prescription</span>
            </NavLink>
            <NavLink
              to="my-carts"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : " p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">My Carts</span>
            </NavLink>
            <NavLink
              to="order-summery"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "  p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Order Summery</span>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "  p-2 space-x-3 flex items-center px-4 py-2 text-gray-700 rounded-lg"
              }
            >
              <BiRightArrow />
              <span onClick={logout} class="mx-4 font-medium">
                Logout
              </span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default UserDashbord