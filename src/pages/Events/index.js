import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GetService from "../../components/GetService";
import Blue from "../../assets/images/blue-marlin.png";
import Classic from "../../assets/images/Chub Cay Classic - TOURNAMENT LOGO (2) 1.svg";
import Open from "../../assets/images/Chub Cay Open LOGO 1.png";
import Invit from "../../assets/images/Chub Cay Invitational - TOURNAMENT LOGO 1.svg";
import WestFist from "../../assets/images/West-End-Meatfish-Madness.png";
import WestMadness from "../../assets/images/West-End-Meatfish-Mania_large.png";
import Camp from "../../assets/images/camp.png";

export default function Events() {
  return (
    <div>
      <div className="container mt-5">
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="hero-left">
            <h1 className="champ-h1 ">Blue Marlin Cove Wahoo Open</h1>

            <p className="hero-p">
              Fly Zone Fishing presents the Blue Marlin Cove Wahoo Open and
              Championship, an exciting series set to bring together top anglers
              for a competitive and engaging experience. The Wahoo Open will
              take place from January 16th to 18th, 2025, followed by the
              Championship on February 13th to 15th, 2025. This tournament
              promises a thrilling competition, showcasing talent and
              sportsmanship, while delivering an unforgettable experience for
              all participants.
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">
                    Thursday, January 16th to 18th 2025
                  </strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM–6:00PM</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain’s Meeting 6:00PM</strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/blue-marlin-cove"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
          <div className="" style={{ marginTop: "150px" }}>
            <motion.img
              src={Blue}
              alt="fish"
              width="500"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="">
            <motion.img
              src={Camp}
              alt="fish"
              width="450"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
          <div className="hero-left">
            <h1 className="champ-h1 ">Blue Marlin Cove Championship</h1>

            <p className="hero-p">
              Fly Zone Fishing presents the Blue Marlin Cove Wahoo Open and
              Championship, an exciting series set to bring together top anglers
              for a competitive and engaging experience. The Wahoo Open will
              take place from January 16th to 18th, 2025, followed by the
              Championship on February 13th to 15th, 2025. This tournament
              promises a thrilling competition, showcasing talent and
              sportsmanship, while delivering an unforgettable experience for
              all participants.
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className=""> February 13th to 15th 2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM-6:00PM </strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain's Meeting 6:00PM </strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/blue-marlin-cove"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="hero-left">
            <h1 className="champ-h1 ">Chub Cay Classic</h1>

            <p className="hero-p">
              The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by
              Chub Cay Marina and Resort is the 4th annual tournament of a
              three-part fishing series set to take place from March 13 to March
              15, 2025, at the beautiful Chub Cay Marina and Resort in the
              Bahamas. This highly anticipated event is designed to bring
              together anglers from across the globe, celebrating sport fishing
              while promoting camaraderie and conservation in the stunning
              waters surrounding Chub Cay.
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">March 13th to March 15th, 2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM–6:00PM</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain’s Meeting 6:00PM</strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/chub-clay"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
          <div className="">
            <motion.img
              src={Classic}
              alt="fish"
              width="500"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="">
            <motion.img
              src={Open}
              alt="fish"
              width="450"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
          <div className="hero-left">
            <h1 className="champ-h1 ">Chub Cay Open</h1>

            <p className="hero-p">
              The Chub Cay Open, presented by Fly Zone Fishing and hosted by
              Chub Cay Marina and Resort, is the second tournament in a
              thrilling three-part fishing series. Scheduled to take place from
              March 27 to March 29, 2025, at the scenic Chub Cay Marina and
              Resort in the Bahamas, this tournament promises to build on the
              excitement generated by the inaugural Chub Cay Classic. Anglers
              from around the world will converge to compete in a friendly yet
              competitive environment, showcasing their fishing skills in one of
              the most beautiful marine settings.
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">March 27th to March 29th,2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM-6:00PM </strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain's Meeting 6:00PM </strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/chub-clay"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="hero-left">
            <h1 className="champ-h1 ">Chub Cay Invitational </h1>

            <p className="hero-p">
              The Chub Cay Invitational, presented by Fly Zone Fishing and
              hosted by Chub Cay Marina and Resort, marks the third and final
              leg of the highly competitive three-part fishing series. The Chub
              Cay Invitational is Scheduled for April 11 to April 13, 2025, at
              the stunning Chub Cay Marina and Resort in the Bahamas, this
              exclusive tournament is designed specifically for members of the
              Chub Cay Club. Following the excitement of the previous two
              events—the Chub Cay Classic and the Chub Cay Open—the invitational
              promises to bring together a select group of anglers for a weekend
              of camaraderie, competition, and celebration of sport fishing
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">April 11th to April 13th, 2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM–6:00PM</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain’s Meeting 6:00PM</strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/chub-clay"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
          <div className="">
            <motion.img
              src={Invit}
              alt="fish"
              width="500"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="">
            <motion.img
              src={WestFist}
              alt="fish"
              width="500"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
          <div className="hero-left">
            <h1 className="champ-h1 ">West End Meatfish Madness</h1>
            <p className="hero-p">
              Fly Zone Fishing is thrilled to announce the West End MeatFish
              Madness 2025, a premier fishing tournament hosted at the scenic
              Blue Marlin Cove in the beautiful West End of Grand Bahama. This
              exciting event will take place from April 24 to April 26, 2025,
              drawing anglers from around the world to compete for prizes while
              fishing for Tuna, Mahi-Mahi, and Wahoo in the crystal-clear waters
              of the Bahamas. West End offers an ideal setting for anglers of
              all levels, providing exceptional fishing grounds, world-class
              competition, and unforgettable views. The tournament promises not
              only the thrill of fishing but also an opportunity to connect with
              fellow enthusiasts and experience the rich marine life of the
              Bahamas. Whether you're a seasoned pro or a newcomer, the West End
              MeatFish Madness guarantees a memorable and exhilarating
              experience. Don’t miss out—sign up now to be part of the action!
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">April 24th to April 26th, 2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM-6:00PM </strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain's Meeting 6:00PM </strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/west-end-meatfish-madness"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div className="container d-flex mt-5 flex-column flex-lg-row gap-5">
          <div className="hero-left">
            <h1 className="champ-h1 ">West End Meatfish Mania</h1>

            <p className="hero-p">
              Fly Zone Fishing proudly presents the West End MeatFish Mania
              2025, an electrifying fishing tournament set against the stunning
              backdrop of Blue Marlin Cove in West End, Grand Bahama. Taking
              place from May 8 to May 10, 2025, this action-packed event invites
              anglers from across the globe to battle it out for top prizes
              while targeting Tuna, Mahi-Mahi, and Wahoo in the pristine waters
              of the Bahamas. With its world-class fishing grounds, breathtaking
              scenery, and competitive yet welcoming atmosphere, West End
              MeatFish Mania is the ultimate event for fishing enthusiasts of
              all skill levels. Whether you're chasing the thrill of the catch
              or looking to connect with fellow anglers, this tournament
              delivers an unforgettable experience. Secure your spot today and
              get ready for an epic fishing adventure!
            </p>
            <div className="row ">
              <ul className="list-unstyled text-start d-flex flex-column gap-4">
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong className="">May 8th to May 10th, 2025</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM-6:00PM </strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="url(#paint0_linear_47_3299)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_3299"
                          x1="15.9999"
                          y1="31.0538"
                          x2="15.9999"
                          y2="1.48336e-09"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B7FE" />
                          <stop offset="1" stop-color="#5823FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <strong>Captain's Meeting 6:00PM </strong>
                </li>
              </ul>
            </div>
            <Link
              className="text-decoration-none text-white"
              to="/tournaments/west-end-meatfish-mania"
            >
              <button className="contact-button">More Information</button>
            </Link>
          </div>
          <div className="">
            <motion.img
              src={WestMadness}
              alt="fish"
              width="450"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 2,
              }}
            />
          </div>
        </div>
        <GetService />
      </div>
    </div>
  );
}
