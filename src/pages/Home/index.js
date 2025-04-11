import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "../../utils/motion";
import GetService from "../../components/GetService";
import Counter from "../../components/Counter";
// Images
import HomeMain from "../../assets/images/HomeMain.png";
import GetStartedButtonArrowImage from "../../assets/images/get-started-btn-arrow.png";
import Start1 from "../../assets/images/start-heo-img-1.png";
import Start2 from "../../assets/images/start-heo-img-2.png";
import UpcomingEvents from "../../components/UpcomingEvents";
import LeaderBoard from '../LeaderBoard/index';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Main Section */}
      <div className="main-hero-section layout-space ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="hero-details-box">
                <h1 className="title">
                  <Typewriter text="Setting New Standards" className="mb-0" />
                </h1>
                <h2 className="sub-title">
                  in Sports and Entertainment <br></br> with AI-Driven Experiences
                </h2>
                <p className="des">
                  Flyzone specializes in delivering IT solutions tailored to the
                  unique needs of the sports and entertainment industry. Our
                  AI-driven solutions enable businesses to improve audience
                  engagement, streamline operations, and strengthen security. By
                  integrating advanced systems and innovative strategies, we
                  help organizations overcome challenges, adapt to change, and
                  achieve growth opportunities in a highly competitive
                  landscape.
                </p>
                <button className="btn" onClick={() => navigate("/contact-us")}>
                  <span className="me-3">Get Started</span>
                  <img src={GetStartedButtonArrowImage} alt="" />
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="img-box">
                <motion.img
                  src={HomeMain}
                  className="main-img"
                  alt="Fish"
                  initial={{ x: "400%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 5,
                    delay: 1,
                  }}
                />
                <motion.img
                  src={Start1}
                  alt="Get Started Buttone Arrow"
                  className="start-1"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  animate={{
                    x: ["0px", "10px", "0px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={Start1}
                  alt="Get Started Buttone Arrow"
                  className="start-2"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  animate={{
                    x: ["0px", "10px", "0px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={Start2}
                  alt="Get Started Buttone Arrow"
                  className="start-3"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  animate={{
                    x: ["0px", "10px", "0px"],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 pt-5">
        <h1 className="leaderboard-h1">
          Events<span>Leaderboard</span>
        </h1>

      </div>
      <LeaderBoard label chatBox defaultChatState = {true} />
      <div className="rating-section">
        <div className="container">
          <div className="d-flex justify-content-between text-center flex-column flex-lg-row">
            {[
              { targetNumber: 970, label: "Visitors" },
              { targetNumber: 30, label: "Clients" },
              { targetNumber: 10, label: "Partners" },
              { targetNumber: 7, label: "Awards" },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center"
              >
                <span className="d-flex">
                  <Counter targetNumber={item.targetNumber} duration={2000} />
                  <span className="fs-24">+</span>
                </span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5">
        <UpcomingEvents />
      </div>

      <GetService />
    </div>
  );
}