import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import Close from "../assets/images/close.png";

const EventsNavbar = ({ links }) => {
  const location = useLocation();
  const navLinks = {
    wahoo: [
      { path: "/tournaments/wahoo-open", label: "Information" },
      { path: "/tournaments/wahoo-open/rules", label: "Rules" },
      { path: "/tournaments/wahoo-open/resort-and-marina",
        label: "Resort & Marina",
      },{
        path: "/tournaments/wahoo-open/gallery",
        label: "Gallery",
      },
    ],
    championship: [
      { path: "/tournaments/championship", label: "Information" },
      {
        path: "/tournaments/championship/resort-and-marina",
        label: "Resort & Marina",
      },
      { path: "/tournaments/championship/rules", label: "Rules" },

      { path: "/tournaments/championship/gallery", label: "Gallery" },
    ],
    chubClayInvitational: [
      { path: "/tournaments/chub-cay-invitational", label: "Information" },
      { path: "/tournaments/chub-cay-invitational/rules", label: "Rules" },
      {
        path: "/tournaments/chub-cay-invitational/gallery",
        label: "Gallery",
      },
      { path: "/forums", label: "Forum" },
    ],
    chubClayOpen: [
      { path: "/tournaments/chub-cay-open", label: "Information" },
      { path: "/tournaments/chub-cay-open/rules", label: "Rules" },
      {
        path: "/tournaments/chub-cay-open/gallery",
        label: "Gallery",
      },
      { path: "/forums", label: "Forum" },
    ],
    chubClayClassic: [
      { path: "/tournaments/chub-cay-classic", label: "Information" },
      { path: "/tournaments/chub-cay-classic/rules", label: "Rules" },
      {
        path: "/tournaments/chub-cay-classic/gallery",
        label: "Gallery",
      },
      { path: "/forums", label: "Forum" },
    ],
   
    westEndMeatFishMania: [
      { path: "/tournaments/west-end-meatfish-mania", label: "Information" },
      { path: "/tournaments/west-end-meatfish-mania/rules", label: "Rules" },
      {
        path: "/tournaments/west-end-meatfish-mania/optional",
        label: "Optional",
      },
      {
        path: "/tournaments/west-end-meatfish-mania/gallery",
        label: "Gallery",
      },
      { path: "/forums", label: "Forum" },
    ],
     burunuBoma: [
      { path: "/tournaments/burunu-Boma", label: "Information" },
      { path: "/tournaments/burunu-Boma/rules", label: "Rules" },
      { path: "/forums", label: "Forum" },
    ],
  };

  const selectedLinks = navLinks[links] || [];
  return (
    <div className="container events-navbar">
      <div className="nav">
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
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <div className="nav-links">
                {selectedLinks.map((link) => (
                  <Link
                    key={link.path}
                    className={`nav-anchor mx-2 ${
                      location.pathname === link.path ? "active-link" : ""
                    }`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                ))}
                {links !== "wahoo" && links !== "championship" && links !== "burunuBoma" && (
                  <a
                    className={`nav-btn ${
                      location.pathname.includes("masnia")
                        ? "disabled-button"
                        : ""
                    }`}
                    href={
                      links === "westEndMeatFishMania"
                        ? location.pathname.includes("west-end")
                          ? "/west-end-meat-fish/register/3"
                          : "/west-end-meat-fish/register/3"
                        : "/register"
                    }
                  >
                    Register
                  </a>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default EventsNavbar;
