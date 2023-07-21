import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export const UserOutlet = () => {
  const { user } = useAuth();
  return (
    <main>
      {Object.keys(user).length !== 0 ? (<>
          <Outlet/>
      </>) : <Navigate to="/login" />}
    </main>
  );
};
