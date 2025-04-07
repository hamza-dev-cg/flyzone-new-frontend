import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/MainNavbar";
import GetService from "../../components/GetService";
import MiniNavbar from "../../components/MiniNavbar";
import VideoPlayer from "../../components/VideoPlayer";
import About_Us_Image from "../../assets/images/about-us.png";
import { motion } from "framer-motion";
import { Typewriter } from "../../utils/motion";
// Images
import AboutCircle from "../../assets/images/AboutCircle.png";
import AboutMain from "../../assets/images/AboutMain.png";
import Mike from "../../assets/images/mike.png";
import Linkedin from "../../assets/images/linkedin.png";
import Fly from "../../assets/images/fly.png";
import Bulb from "../../assets/images/bulb.png";
import Shakehand from "../../assets/images/shakehand.png";
import Security from "../../assets/images/security.png";
import Agreement from "../../assets/images/agreement.png";
import Game from "../../assets/images/game.png";
import Choose from "../../assets/images/choose.png";

export default function AboutUs() {
  const [isInViewAboutUs, setIsInViewAboutUs] = useState(false);
  const [isInViewAboutStackHolders, setIsInViewAboutStackHolders] =
    useState(false);
  const [isInViewKeyDifferences, setIsInViewKeyDifferences] = useState(false);
  const [isInViewWhyChooseUsView, setIsInViewWhyChooseUsView] = useState(false);

  const handleScroll = () => {
    // About Us Section
    const aboutUsElement = document.getElementById("about-us-section");
    const aboutUsPosition = aboutUsElement.getBoundingClientRect();
    if (aboutUsPosition.top >= 200) {
      setIsInViewAboutUs(true);
    }

    // Stack Holder About Section
    const aboutStckHoldersElement = document.getElementById(
      "about-us-inro-section"
    );
    const aboutStckHoldersPosition =
      aboutStckHoldersElement.getBoundingClientRect();
    if (aboutStckHoldersPosition.top <= 600) {
      setIsInViewAboutStackHolders(true);
    }

    // Our Differentiations Section
    const ourdifferentiationsElement = document.getElementById(
      "our-differentiations-section"
    );
    const ourdifferentiationsPostition =
      ourdifferentiationsElement.getBoundingClientRect();
    if (ourdifferentiationsPostition.top <= 600) {
      setIsInViewKeyDifferences(true);
    }

    // Why Choose flyzone
    const whyChooseUsSectionElement = document.getElementById(
      "why-choose-us-section"
    );
    const whyChooseUsSectionPosition =
      whyChooseUsSectionElement.getBoundingClientRect();
    if (whyChooseUsSectionPosition.top <= 600) {
      setIsInViewWhyChooseUsView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="about-us-section">
      <div className="container  layout-space">
        <div className="text-center">
          <h1 className="main-h1 pt-3">
            We provide perfect <br></br> IT Solutions & Technology  <br></br>
            for any Business
          </h1>
          <div className="w-10 d-flex justify-content-center">
            <p className="main-p w-50">
              We specialize in providing comprehensive IT solutions and advanced
              technology tailored for your Business. Join our innovative team
              and be a part of our mission to empower businesses for success!
            </p>
          </div>
          <VideoPlayer />
        </div>
        {/* About Section */}
        <div className="container about-us-section d-flex justify-content-center align-items-center mt-5 mb-5 gap-5 flex-column flex-lg-row" id="about-us-section">
          <div className="about-details-box d-flex flex-column justify-content-center">
            <h1 className="title">
              <Typewriter text="About Our Company" />
            </h1>
            <p className="des">
              Every great performance starts with the right foundation. At
              Flyzone, we provide the technology that powers excellence in
              sports and entertainment. With a clear understanding of the
              industry’s fast-paced nature, we design IT solutions that
              simplify operations, elevate experiences, and ensure lasting
              impact.
              <br></br>
              <br></br>
              From AI-driven systems that optimize decision-making to secure
              platforms that build trust, our work is grounded in one goal:
              to help your business achieve more.
            </p>
            <div className="d-flex flex-column gap-3 my-2 about-list">
              <div className="d-flex gap-2 ">
                <img src={AboutCircle} alt="" width="35px" />
                <span className="align-self-center">
                  Operational Optimization
                </span>
              </div>
              <div className="d-flex gap-2">
                <img src={AboutCircle} alt="" width="35px" />

                <span className=" align-self-center">
                  Custom-Fit Strategies
                </span>
              </div>
              <div className="d-flex gap-2">
                <img src={AboutCircle} alt="" width="35px" />
                <span className=" align-self-center">Tech Expertise</span>
              </div>
            </div>
          </div>
          <div className="img-box">
            <motion.img
              src={AboutMain}
              alt="Fish"
              className="about-details-img"
              initial={{ x: "400%" }}
              animate={{
                x: isInViewAboutUs ? "0%" : "400%",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 5,
              }}
            />
          </div>
        </div>
        <div className="about-us-inro-section" id="about-us-inro-section">
          <div className="container">
            <h1 className="main-title">
              About <span>Us</span>
            </h1>
            <div className="row">
              <motion.div
                initial={{ x: "-200%" }}
                animate={{
                  x: isInViewAboutStackHolders ? "0%" : "-200%",
                }}
                className="col-sm-12 mb-5"
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <div className="team-container">
                  <div className="team-detail-container">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-2">
                      <h2 className="title">Robert "Fly" Navarro</h2>
                      <a
                        href="https://www.linkedin.com/in/flynavarro/"
                        target="_blank"
                        className="me-5"
                        rel="noreferrer"
                      >
                        <img
                          src={Linkedin}
                          className="linkedin-icon"
                          alt="LinkedIn Logo"
                        />
                      </a>
                    </div>
                    <p>
                      With over 30 years of experience in the fishing industry,
                      Robert Fly has brought his expertise into a new chapter with
                      FlyZone. Known for creating impactful sporting experiences
                      across six continents, he is now combining his knowledge
                      with advanced AI technology to transform the sports and
                      entertainment industry.
                    </p>
                    <p>
                      FlyZone focuses on improving event management, audience
                      engagement, and business connectivity through innovative
                      solutions, setting the standard for how sports and
                      entertainment should be managed, ensuring every experience
                      is smarter, smoother, and more impactful.
                    </p>
                    <p>
                      By blending traditional sporting expertise with modern
                      technology, Robert and Mike are creating new opportunities
                      for partners and stakeholders, setting a new standard in the
                      industry. Their shared vision is raising the bar in the
                      management and experience of sports and entertainment.
                    </p>
                  </div>
                  <div className="team-img-container">
                    <img src={Fly} alt="mike" width="300" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "200%" }}
                animate={{
                  x: isInViewAboutStackHolders ? "0%" : "200%",
                }}
                className="col-sm-12"
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="team-container">
                  <div className="team-img-container">
                    <img src={Mike} alt="mike" width="300" />
                  </div>
                  <div className="team-detail-container">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-2">
                      <h2 className="title">Mike Callahan</h2>
                      <a
                        href="https://www.linkedin.com/in/mikecallahanjr/"
                        target="_blank"
                        className="me-5"
                        rel="noreferrer"
                      >
                        <img
                          src={Linkedin}
                          className="linkedin-icon"
                          alt="LinkedIn Logo"
                        />
                      </a>
                    </div>
                    <p>
                      With years of experience in technology and business, Mike
                      Callahan knows how to bring the right tools to the table and
                      turn ideas into action. His expertise in building strong
                      teams and creating winning strategies drives FlyZone’s
                      mission to reshape the sports and entertainment industry
                      through smart, AI-driven solutions.
                    </p>
                    <p>
                      Whether it’s simplifying venue operations, boosting
                      security, or enhancing audience experiences, Mike has a
                      knack for tackling challenges head-on and turning roadblocks
                      into stepping stones. He believes in solutions that don’t
                      just work but leave a lasting impact.
                    </p>
                    <p>
                      But FlyZone’s story is about more than just technology—it’s
                      about a partnership built to last. For over 45 years, Mike
                      and Robert Fly have shared a friendship that’s the heartbeat
                      of the company. Their collaboration isn’t just about
                      business; it’s about trust, shared vision, and creating a
                      legacy that stands the test of time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="difference-section" id="our-differentiations-section">
          <h1 className="difference-title">
            Our Key <span>Differentiators</span>
          </h1>
          <p className="difference-des">
            At Flyzone, we deliver IT solutions that tackle your most complex
            challenges and drive meaningful results. Trusted by some of the
            biggest names in the sports and entertainment industry, we harness
            the power of data and AI technology to expand audience reach and
            foster long-term engagement. From financial management to AI-powered
            insights and seamless audience interactions, our solutions make your
            daily operations smarter and more efficient.
          </p>
          <div className="row mt-4">
            <div className="col-lg-7 col-md-12 order-lg-1 order-2 mt-lg-0 mt-3">
              <div className="detail-container d-flex flex-column ">
                <motion.div
                  initial={{ x: "-400%" }}
                  animate={{
                    x: isInViewKeyDifferences ? "0%" : "-400%",
                  }}
                  className="detail-row d-flex flex-column flex-lg-row align-items-lg-start align-items-center text-lg-start text-center"
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                >
                  <div className="detail-img">
                    <img src={Bulb} alt="" width={80} />

                  </div>
                  <div className="detail-content">
                    <h6>Solutions That Fit Your Goals</h6>
                    <p>
                      At Flyzone, we know that every business has unique goals.
                      That's why our solutions are tailored to your
                      needs—whether it's enhancing audience engagement with
                      advanced tools or streamlining backend processes for
                      greater efficiency, we design strategies that align with
                      your objectives.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: "-400%" }}
                  animate={{
                    x: isInViewKeyDifferences ? "0%" : "-400%",
                  }}
                  className="detail-row d-flex flex-column flex-lg-row align-items-lg-start align-items-center text-lg-start text-center"


                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="detail-img">
                    <img src={Security} alt="" width={80} />
                  </div>
                  <div className="detail-content">
                    <h6>Partnerships That Power Growth</h6>
                    <p>
                      Our partnerships with industry leaders bring the latest
                      tools and technologies directly to your business. This
                      collaboration empowers you to stay agile, embrace
                      innovation faster, and strengthen your position in a
                      competitive market.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: "-400%" }}
                  animate={{
                    x: isInViewKeyDifferences ? "0%" : "-400%",
                  }}
                  className="detail-row d-flex flex-column flex-lg-row align-items-lg-start align-items-center text-lg-start text-center"

                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="detail-img">
                    <img src={Shakehand} alt="" width={80} />
                  </div>
                  <div className="detail-content">
                    <h6>Your Security, Our Priority</h6>
                    <p>
                      Data breaches and system vulnerabilities cost more than
                      money—they erode trust. With Flyzone, your business is
                      protected by robust security protocols that evolve with
                      the threats, keeping your operations safe and reliable.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: "-400%" }}
                  animate={{
                    x: isInViewKeyDifferences ? "0%" : "-400%",
                  }}
                  className="detail-row d-flex flex-column flex-lg-row align-items-lg-start align-items-center text-lg-start text-center"

                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <div className="detail-img">
                    <img src={Agreement} alt="" width={80} />
                  </div>
                  <div className="detail-content">
                    <h6>Multilingual Support</h6>
                    <p>
                      Whether your audience is local or global, our multilingual
                      support ensures seamless communication at every
                      touchpoint. We help you connect without limitations,
                      opening new doors to growth.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 order-lg-1 order-1 align-self-center">
              <img src={Game} alt="fish" className="detail-images-2 " />
            </div>
          </div>
        </div>
        <div className="why-choose-us-section" id="why-choose-us-section">
          <div className="container my-5 d-flex flex-column-reverse flex-lg-row gap-5 align-items-center ">
            <motion.img
              src={Choose}
              alt="Fish"
              className="about-images "
              initial={{ x: "-400%" }}
              animate={{
                x: isInViewWhyChooseUsView ? "0%" : "-400%",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 5,
              }}
            />
            <div className="details-box d-flex flex-column justify-content-center">
              <h1 className="details-title">
                <Typewriter text="Why Choose FlyZone" />
              </h1>
              <p className="details-des">
                Choosing the right technology partner can make all the
                difference. At Flyzone, we combine industry expertise with
                innovative IT solutions tailored for the sports and
                entertainment industry. With expertise in AI, data analytics,
                and cloud systems, we streamline operations, enhance audience
                engagement, and ensure robust security.
                <br></br>
                <br></br>
                At Flyzone, it’s not just about keeping up—it’s about giving
                you the tools to lead, innovate, and succeed in a rapidly
                evolving industry.
              </p>
            </div>
          </div>
        </div>
        <div className=" container d-flex  flex-column flex-lg-row gap-lg-5 gap-2 mt-5 mb-5">
          <div className="main-left ">
            <h1 className="about-h1">
              Our Aim &&nbsp;<span className="about-span">Philosophy</span>
            </h1>

            <p className="main-p">
              At CyberGen, our philosophy is rooted in the belief that
              collaboration and unity are key to achieving success. When you
              partner with us, we become one team, working tirelessly to ensure
              your success becomes our success.
            </p>
            <ul className="fw-bold">
              <li>Collaboration & Unity as Key Drivers of Success</li>
              <li className="mt-3 ">
                Tireless Commitment to Shared Accomplishments
              </li>
              <li className="mt-3 ">Partnership Creates a Unified Team</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <img src={About_Us_Image} alt="about us" className="about-images-1 "
            />
          </div>
        </div>
        <GetService />
      </div>
    </div>
  );
}
