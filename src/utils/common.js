import Start1 from "../assets/images/start-heo-img-1.png";
import Start2 from "../assets/images/start-heo-img-2.png";
import { getTokenFromLocalStorage, IsAdminLoggedIn } from "./helpers.js";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 const StarImages = [
  { src: Start1, className: "start-1" },
  { src: Start1, className: "start-2" },
  { src: Start2, className: "start-3" },
];

 const checkIsUserLoggedIn = async (navigate) => {
  const tokenValidation = await getTokenFromLocalStorage();
  if (!tokenValidation?.token) {
    localStorage.clear();
    navigate("/login");
    return;
  }

  const isAdmin = await IsAdminLoggedIn();
  if (!isAdmin) {
    navigate("/");
  }
};

 const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_DEV_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export { baseQuery, checkIsUserLoggedIn, StarImages };
