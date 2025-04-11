import React from "react";
import Logo from "../assets/images/logo-light.png";
import Home from "../assets/images/home-icon.svg";
import Mail from "../assets/images/mail-icon.svg";
import Mobile from "../assets/images/mobile-icon.svg";
import Face from "../assets/images/face-light-icon.svg";
import Twitter from "../assets/images/twitter-icon.svg";
import Linkedin from "../assets/images/linkedin-icon.svg";
import Instagram from "../assets/images/instagram-icon.svg";
import Tiktok from "../assets/icons/icon-tiktok.svg";
import Youtube from "../assets/images/youtube-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/flynavarro/",
      imgSrc: Face,
      alt: "Facebook",
    },
    { href: "https://x.com/FlyZoneFishing", imgSrc: Twitter, alt: "Twitter" },
    {
      href: "https://www.tiktok.com/@flyzonefishing?lang=en",
      imgSrc: Tiktok,
      alt: "TikTok",
    },
    {
      href: "https://www.linkedin.com/in/flynavarro/",
      imgSrc: Linkedin,
      alt: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/flyzonefishing/?hl=en",
      imgSrc: Instagram,
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/@FlyNavarro/videos",
      imgSrc: Youtube,
      alt: "YouTube",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row ">
          <div className="logo">
            <Link to="/">
              <img className="img-fluid" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="footer-row-box">
            <img src={Home} alt="home" />
            <a
              href="https://www.google.com/maps?q=2875+S+Ocean+Blvd,+Ste.+200+Palm+Beach,+FL+33480"
              target="_blank"
              rel="noreferrer"
              className="email-link mx-2"
            >
              Florida Office 2875 S Ocean Blvd, Ste. 200 Palm Beach, FL 33480
            </a>
          </div>
          <div className="footer-row-box">
            <img src={Mail} alt="mail" />
            <a href="mailto:info@flyzone.ai" className="mx-2 email-link">
              info@flyzone.ai
            </a>{" "}
          </div>
          <div className="footer-row-box">
            <img src={Mobile} alt="" />
            <a href="tel:+18772210322" className="email-link mx-2">
              +1-877-221-0322
            </a>{" "}
          </div>
          <div className="footer-row-box">
            {socialLinks.map(({ href, imgSrc, alt }) => (
              <a key={href}  rel="noreferrer" href={href} target="_blank" className="social-icon">
                <img src={imgSrc} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-b">
          <div>© 2025 Copyrights by CyberGen. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
