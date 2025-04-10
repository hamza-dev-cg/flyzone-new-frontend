import React from "react";
import { motion } from "framer-motion";
import Line from "../assets/images/line.png";
import FlyZoneLogo from "../assets/images/Fly-Zone-Logo.png";
import BurunuBomaLogo from "../assets/images/BurunuBomaImg.png";

const TournamentInfo = ({ title, imgSrc, altText, description, date }) => {
  const title_new = title?.props?.children;

  return (
    <div className="container mt-4 add-z-index overflow-hidden">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="des-container">
            <h1 className="title">{title}</h1>
            <div className="des">
              <img src={Line} alt="line" className="responsive-line" />
              <p className="text-center fw-bold">{date}</p>
            </div>
            <p className="events-para">{description}</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex  flex-column gap-4 justify-content-center">
          <div className="d-flex justify-content-center mb-4">
            {title_new == "Burunu Boma" ? (
              <>
                <img src={BurunuBomaLogo} alt={altText} width="300" />
              </>
            ) : (
              <>
                <img src={FlyZoneLogo} alt={altText} width="300" />
              </>
            )}
          </div>

          <motion.div
            className="d-flex justify-content-center mt-0"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.5,
            }}
          >
            <img src={imgSrc} alt={altText} width="320" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TournamentInfo;
