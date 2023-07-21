import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DoctorDashbord from "../users/doctor/Dashbord/DoctorDashbord";


export const DoctorOutlet = () => {
  const { doctor } = useAuth();
  return (
    <>
      <main className="">
        {doctor ? (
          <>
            <div className="flex">
              <DoctorDashbord/>
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
