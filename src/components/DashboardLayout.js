import React from "react";
import { CiTrophy } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiColumns } from "react-icons/bi";
import { CiViewTable } from "react-icons/ci";
import "../assets/css/dashboard.css";
import Logo from "../assets/images/sidebar-logo.svg";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/login");
  };

  const isActive = (path) => path.includes(location.pathname);

  return (
    <div className="dashboard-page">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-container">
            <a href="/" className="logo-link">
              <img src={Logo} alt="Logo" className="logo" />
            </a>
            <span className="sidebar-content">
            <ul>
              <li>
                <Link
                  to="/admin-dashboard/leaderboard"
                  className={
                    isActive("/admin-dashboard/leaderboard")
                      ? "active-link"
                      : ""
                  }
                >
                <CiViewTable />  Leaderboard
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/admin-dashboard/registration"
                  className={
                    isActive("/admin-dashboard/registration")
                      ? "active-link"
                      : ""
                  }
                >
                 <FaRegPlusSquare /> Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-dashboard/forum-uploads"
                  className={
                    isActive("/admin-dashboard/forum-uploads")
                      ? "active-link"
                      : ""
                  }
                >
                <FaWpforms />  Forums Uploads
                </Link>
              </li>
           
              {/* <li>
                <Link
                  to="/admin-dashboard/events"
                  className={
                    isActive("/admin-dashboard/events")
                      ? "active-link"
                      : ""
                  }
                >
                  Events Uploads
                </Link>
              </li> */}
          
             
              <li>
                <Link
                  to="/admin-dashboard/applicants"
                  className={
                    isActive("/admin-dashboard/applicants")
                      ? "active-link"
                      : ""
                  }
                >
                <BiColumns />  Applicants
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-dashboard/tournaments"
                  className={
                    isActive(["/admin-dashboard/tournaments", "/admin-dashboard/tournaments/tournaments-details",'/admin-dashboard/tournaments/tournaments-details/add-event'])
                      ? "active-link"
                      : ""
                  }
                >
                <CiTrophy />  Tournaments
                </Link>
              </li>
            </ul>
                <button
                  onClick={logoutHandler}
                  className="btn w-100 logout-button"
                >
                  Logout
                </button>
                </span>
  
          </div>
        </div>
        {/* Renders the nested routes */}
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
