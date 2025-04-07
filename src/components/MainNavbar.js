import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Avatar from 'react-avatar';
import Menu from "../assets/images/menu.png";
import Close from "../assets/images/close.png";
import EventsModel from "./EventsModel";
import ProfileImg from "../assets/images/forum-img.png";
import NotifyImg from "../assets/images/notify.png";
import { getTokenFromLocalStorage } from "../utils/helpers";
import "../assets/css/navbar.css";
const MainNavbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [eventName, setEventName] = useState("");
  const handleOpenModal = (name) => {
    setEventName(name);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

  }, []);
  const token = getTokenFromLocalStorage();
  const location = useLocation();
  return (
    <div className="main-navbar p-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="nav-anchor" to="/">
            <img src={Logo} alt="flyzone" width="190" />
          </Link>

          <button
            className="navbar-toggler custom-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="custom-toggler-icon">
              <span className="menu-icon">
                <img src={Menu} alt="Menu" width="50" />
              </span>
              <span className="close-icon">
                <img src={Close} alt="Close" width="30" />
              </span>
            </div>
          </button>

          {/* Navbar links, aligned to the right */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <div className="nav-links">
                <Link
                  className={`nav-anchor ${location.pathname === "/" && "active-link"
                    }`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`nav-anchor ${location.pathname === "/our-solutions" && "active-link"
                    }`}
                  to="/our-solutions"
                >
                  Our Solutions
                </Link>
                {/* Dropdown */}
                <li className="dropdown nav-anchor">
                  <span
                    className="nav-anchor dropdown-toggle"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                  >
                    Tournaments
                  </span>
                  <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li>
                      <span
                        className="nav-anchor dropdown-item"
                        onClick={() => handleOpenModal("Wahoo")}
                      >
                        Wahoo
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-anchor dropdown-item"
                        onClick={() => handleOpenModal("Chub")}
                      >
                        Chub Cay
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-anchor dropdown-item"
                        onClick={() => handleOpenModal("West")}
                      >
                        West End Meat
                      </span>
                    </li>
                    <li>
                      <span
                        className="nav-anchor dropdown-item"
                        onClick={() => handleOpenModal("Burunu")}
                      >
                        Burunu Boma 
                      </span>
                    </li>
                  </ul>
                </li>
                <Link
                  className={`nav-anchor ${location.pathname === "/forums" && "active-link"
                    }`}
                  to="/forums"
                >
                  Forums
                </Link>
                <Link
                  className={`nav-anchor ${location.pathname === "/leaderboard" && "active-link"
                    }`}
                  to="/leaderboard"
                >
                  Leaderboard
                </Link>
                <Link
                  className={`nav-anchor ${location.pathname === "/registrations" && "active-link"
                    }`}
                  to="/registrations"
                >
                  Registrations
                </Link>
                <Link
                  className={`nav-anchor ${location.pathname === "/about-us" && "active-link"
                    }`}
                  to="/about-us"
                >
                  About us
                </Link>

                <Link
                  className={`nav-anchor ${location.pathname === "/contact-us" && "active-link"
                    }`}
                  to="/contact-us"
                >
                  Contact us
                </Link>

                {token?.isValid === true ? (
                  <>
                    {/* <button className="nav-btn">
                      <Link
                        className={`nav-anchor  text-white ${location.pathname === "/logout" && "active-link"
                          }`}
                        to="/"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </button> */}
                    <div className="d-flex gap-2 flex-column flex-lg-row ">
                      {/* <li class="dropdown align-self-center">
                        <a
                          class="nav-anchor "
                          href="#"
                          id="navbarDropdown"
                          data-bs-toggle="dropdown"
                        >
                          <img src={NotifyImg} alt="profile" width={40} />
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a className="nav-anchor dropdown-item" href="#">
                              <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                  <img
                                    src={ProfileImg}
                                    alt="profile"
                                    width={40}
                                  />
                                  <div className="mt-3">
                                    <p className="mb-0 navbar-para">
                                      7 Things to Do be
                                    </p>
                                    <p style={{ fontWeight: "lighter" }}>
                                      Lorem Ipsum is siimply dummy
                                    </p>
                                  </div>
                                </div>
                                <p
                                  className="mb-0 "
                                  style={{ fontWeight: "lighter" }}
                                >
                                  45 min Ago
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="nav-anchor dropdown-item" href="#">
                              <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                  <img
                                    src={ProfileImg}
                                    alt="profile"
                                    width={40}
                                  />
                                  <div className="mt-3">
                                    <p className="mb-0 navbar-para">
                                      7 Things to Do be
                                    </p>
                                    <p style={{ fontWeight: "lighter" }}>
                                      Lorem Ipsum is siimply dummy
                                    </p>
                                  </div>
                                </div>
                                <p
                                  className="mb-0 "
                                  style={{ fontWeight: "lighter" }}
                                >
                                  45 min Ago
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="nav-anchor dropdown-item" href="#">
                              <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                  <UserAvatar name={user?.name} size={50} />
                                  <div className="mt-3">
                                    <p className="mb-0 navbar-para">
                                      7 Things to Do be
                                    </p>
                                    <p style={{ fontWeight: "lighter" }}>
                                      Lorem Ipsum is siimply dummy
                                    </p>
                                  </div>
                                </div>
                                <p
                                  className="mb-0 "
                                  style={{ fontWeight: "lighter" }}
                                >
                                  45 min Ago
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="dropdown">
                        <a
                          className="nav-anchor "
                          href="#"
                          id="navbarDropdown"
                          data-bs-toggle="dropdown"
                        >
                          {/* <UserAvatar name={user?.name} size={42} /> */}
                          <Avatar src={user?.profile_image} size="30"  name={user?.name} round={true} />
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a
                              className="nav-anchor dropdown-item"
                              href="/profile/detail"
                            >
                              <div className="d-flex align-items-center justify-content-between p-0 m-0 ">
                                <p className="mb-0">My Profile</p>
                                <Avatar src={user?.profile_image} size="20"  name={user?.name} round={true} />
      
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-anchor dropdown-item pt-2"
                              href="/profile/update"
                            >
                             Edit Profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="nav-anchor dropdown-item pt-2"
                              href="/"
                              onClick={logoutHandler}
                            >
                              Log out
                            </a>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </>
                ) : (
                  <>
                  <Link
                        className={`nav-anchor  text-white ${location.pathname === "/sign-in" && "active-link"
                          }`}
                        to="/login"
                      >
                    <button className="nav-btn">
                      
                        Sign In
                     
                    </button>
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </div>

      {showModal && (
        <EventsModel
          event={eventName}
          show={showModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MainNavbar;
