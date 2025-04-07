import React from "react";
import Facebook from "../assets/images/facebook-white-blue.svg";
import Linkedin from "../assets/images/linkedin-white-blue.svg";
import Whatsapp from "../assets/images/whatsapp-white-blue.svg";
import Twitter from "../assets/images/twitter-white-blue.svg";

const socialLinks = [
  { href: "https://www.facebook.com/flynavarro/", img: Facebook, alt: "Facebook" },
  { href: "https://www.linkedin.com/in/flynavarro/", img: Linkedin, alt: "LinkedIn" },
  { href: "https://x.com/FlyZoneFishing", img: Twitter, alt: "Twitter" },
];

const MiniNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="container text-end">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className="me-2" target="_blank" rel="noopener noreferrer">
            <img src={link.img} alt={link.alt} width="20" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MiniNavbar;

