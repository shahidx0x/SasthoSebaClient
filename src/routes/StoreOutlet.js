import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StoreDashbord from "../users/store/StoreDashbord";


export const StoreOutlet = () => {
  const { store } = useAuth();
  return (
    <>
      <main className="">
        {store ? (
          <>
            <div className="flex">
              <StoreDashbord />
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
