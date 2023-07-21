import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AdminDashbord from "../users/admin/Dashbord/AdminDashbord";


export const AdminOutlet = () => {
  const { admin } = useAuth();
  return (
    <>
      <main className="">
        {admin ? (
          <>
            <div className="flex">
              <AdminDashbord />
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
