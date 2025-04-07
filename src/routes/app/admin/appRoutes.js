import React from "react";
import { Route } from "react-router-dom";
import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../../utils/helpers";
import ProfileRoutes from "./profileRoutes";
import AdminRoutes from "./adminRoutes";
import DashboardLayout from "../../../components/DashboardLayout";

const AppRoutes = () => {
  const PrivateRoute = () => {
    const token = getTokenFromLocalStorage()?.token;
    const location = useLocation();
  
    if (!token) {
      localStorage.setItem("redirectPath", location.pathname);
      return <Navigate to="/login" replace />;
    }
  
    return <Outlet />;
  };
  return(
  <Route element={<PrivateRoute />}>
    {ProfileRoutes()}
    <Route element={<DashboardLayout />}>
      {AdminRoutes()}
    </Route>
  </Route>
)};

export default AppRoutes;
