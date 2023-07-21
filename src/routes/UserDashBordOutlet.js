import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDashbord from "../users/patient/Dashbord/UserDashbord";

export const UserDashbordOutlet = () => {
  const { user } = useAuth();
  return (
    <main>
      {Object.keys(user).length !== 0 ? (
        <>
          <div className="flex">
            <UserDashbord />
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};


