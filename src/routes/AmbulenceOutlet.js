import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AmbDashbord from "../users/ambulence/AmbDashbord";


export const AmbulenceOutlet = () => {
  const { ambulence } = useAuth();
  return (
    <>
      <main className="">
        {ambulence ? (
          <>
            <div className="flex">
              <AmbDashbord />
              <Outlet />
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </main>
    </>
  );
};
