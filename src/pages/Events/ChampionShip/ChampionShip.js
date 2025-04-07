import React from "react";
import TournamentInfo from "../../../components/TornamentInfo";
import EventsNavbar from "../../../components/EventsNavbar";
import Camp from "../../../assets/images/camp.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const ChampionShip = () => {
  return (
    <div>
      <section className="championship-hero-section">
        <img className="championship-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="championship" />
        <TournamentInfo
          title="Blue Marlin Cove Championship"
          imgSrc={Camp}
          altText={Camp}
          date={"February 13th thru 15th, 2025"}
          description={
            <>
              Get ready for an exhilarating fishing experience at the 2025 Blue
              Marlin Cove Wahoo Championship, taking place from{" "}
              <b style={{ fontWeight: "bold" }}>February 13 to 15 </b> in the
              beautiful West End, Bahamas! This renowned event is set against
              the pristine waters of the Bahamas, making it the ideal setting
              for anglers to battle for the best wahoo catch. With the promise
              of thrilling competition, outstanding prizes, and an atmosphere
              filled with camaraderie, this is an event not to be missed!.
              <br></br>
              <br></br>
              Participants will compete for top honors and generous cash awards,
              while enjoying daily weigh-ins, evening gatherings, and the
              unparalleled hospitality that Blue Marlin Cove is known for.
              Whether you're a seasoned competitor or a passionate fishing
              enthusiast, this tournament provides an unmatched opportunity to
              reel in monster wahoos, connect with fellow anglers, and
              experience the warmth and beauty of the West End.
            </>
          }
        />
      </section>

      <section className="schedule-section">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="text-left mb-4">
                <p className="schedule-header">
                  Schedule Of <br />
                  Events
                </p>
              </div>
              <div className="section">
                <ul className="list-unstyled text-start d-flex flex-column gap-4">
                  <li className="d-flex me-2">
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
                    <span className="fw-semibold">
                      Thursday, February 13th 2025
                    </span>
                  </li>
                  <li className="d-flex me-2">
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
                    <span className="fw-semibold">
                      Registration and Bag Pick up <br /> 4:00PM - 6:00PM
                    </span>
                  </li>
                  <li className="d-flex me-2">
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
                    <span className="fw-semibold">
                      Captain’s Meeting 6:00PM
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="section-card">
                <h4 className="fw-bold">Day 1 Fishing</h4>
                <p>Friday, February 14th 2025</p>
                <ul className="list-unstyled text-start  p-2 section-card-inner">
                  <li className="d-flex align-items-center mb-3">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      6:00 AM Boats may leave Blue Marlin Cove Marina
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      4:00 PM Boats must be checked into the Marina
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      3:00 PM Weigh Station Open
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="section-card">
                <h4 className="fw-bold">Day 2 Fishing</h4>
                <p>Saturday, February 15th 2025</p>
                <ul className="list-unstyled text-start  p-2 section-card-inner">
                  <li className="d-flex align-items-center mb-3">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      6:00 AM Boats may leave Blue Marlin Cove Marina
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      4:00 PM Boats must be checked into the Marina
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="checkmark-circle me-3">
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
                    <span className="fw-semibold">
                      3:00 PM Weigh Station Open
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="award-text">Award Dinner 6:00PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChampionShip;
