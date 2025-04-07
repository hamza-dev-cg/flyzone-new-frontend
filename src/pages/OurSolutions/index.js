import { motion } from "framer-motion";
import GetService from "../../components/GetService";
// Images
import Solution1 from "../../assets/images/solution.png";

export default function OurSolution() {
  return (
    <div>
      {/* Our Solution */}
      <div className="our-solutions-page">
        <div className="text-center">
          <h1 className="main-title">
            We provide perfect IT Solutions & Technology for
            any Business
          </h1>
          <p className="main-des">
            Every business deserves solutions that match its ambition. At
            Flyzone, Our IT expertise and innovative technology empower
            organizations to overcome challenges, seize new
            opportunities, and thrive in today’s competitive environment. Be
            part of a journey where success is redefined!
          </p>
        </div>

        <div className="container my-5 our-solution-section d-flex  flex-column flex-lg-row gap-5" id="about-us-section">
          <div className="details-box">
            <h2 className="title">
              Sports <span>App</span>
            </h2>
            <p className="des">
              Flyzone redefines how sports organizations manage events and
              performance tracking. Our Sports App is designed to simplify
              scoring systems, streamline event registration, and provide
              efficient management solutions. Whether it’s keeping scores
              accurate or managing complex event logistics, our app
              ensures you stay organized, efficient, and focused on what
              matters most—delivering an exceptional sports experience.
            </p>
            <ul>
              <li>Real-time performance tracking</li>
              <li>Streamlined Event Registration</li>
              <li>Manage schedules, logistics, and more</li>
            </ul>
          </div>
          <div className="solution-img">
            <motion.img
              src={Solution1}
              alt="Fish"
              className="solution-motion"
              initial={{ x: "400%" }}
              animate={{
                x: "0%",
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
      </div>
      <GetService />
    </div>
  );
}
