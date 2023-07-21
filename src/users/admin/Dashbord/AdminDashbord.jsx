/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { BiRightArrow } from "react-icons/bi";

const AdminDashbord = () => {
  const { user } = useAuth();
  let active =
    "mt-2 bg-indigo-700 text-gray-100 w-72 p-3  flex items-center p-2 space-x-3";
  return (
    <>
      <aside class="flex flex-col w-96 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
        <a href="#" class="mx-auto">
          <img class="w-auto h-6 sm:h-7" src={user.photoURL} alt="" />
        </a>

        <div class="flex flex-col items-center mt-6 -mx-2">
          <img
            class="object-cover w-24 h-24 mx-2 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
          <h4 class="mx-2 mt-2 font-medium text-black">
            {user.displayName}
          </h4>
          <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavLink
              to="admin/dashbord/usrmanage"
              className={({ isActive }) =>
                isActive
                  ? active
                  : " mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">User Management</span>
            </NavLink>
            <NavLink
              to="admin/dashbord/doctormanage"
              className={({ isActive }) =>
                isActive
                  ? active
                  : " mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Doctor Management</span>
            </NavLink>
            <NavLink
              to="admin/dashbord/ambulence-manage"
              className={({ isActive }) =>
                isActive
                  ? active
                  : " mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Ambulence Management</span>
            </NavLink>
            <NavLink
              to="/add/new/doctor"
              className={({ isActive }) =>
                isActive
                  ? active
                  : "mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Add Doctor</span>
            </NavLink>
            <NavLink
              to="/add/new/store"
              className={({ isActive }) =>
                isActive
                  ? active
                  : "mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Add Store</span>
            </NavLink>
            <NavLink
              to="/add/new/ambulence"
              className={({ isActive }) =>
                isActive
                  ? active
                  : "mt-3 p-2 space-x-3 flex items-center px-4 py-2 text-black rounded-lg"
              }
            >
              <BiRightArrow />
              <span class="mx-4 font-medium">Add Ambulence</span>
            </NavLink>
           
          
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminDashbord;
