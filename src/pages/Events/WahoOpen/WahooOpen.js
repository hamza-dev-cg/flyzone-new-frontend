import React, { useState, useEffect } from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import TournamentInfo from "../../../components/TornamentInfo";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import Blue_Marin from "../../../assets/images/blue-marlin.png";
import { useLocation } from "react-router-dom";
import { formatDateRange } from '../../../utils/helpers'
import { useGetEventBySlugMutation } from "../../../features/user/api";
const WahooOpen = () => {
  const location = useLocation();
  const parts = location.pathname.split("/");
  const slug = parts[2];
  const [EventDetail] = useGetEventBySlugMutation();
  const [event, setEvent] = useState(null)
  const fetchEvents = async () => {
    try {
      const response = await EventDetail(slug);
      if (response?.data?.success) {
        setEvent(response?.data?.tournament);
      }
    } catch (err) {
      console.log("Something went wrong while fetching tournaments.");
    }
  };

  useEffect(() => {
    fetchEvents()
  }, [slug])
  return (
    <div>
      <section className="whoo-open-hero-section">
        <div className="wahoo-bg">
          <img src={EventInformationBg} alt="fish" />
        </div>
        <EventsNavbar basePath="/events" links="wahoo" />
        <TournamentInfo
          title={event?.name}
          imgSrc={Blue_Marin}
          altText={Blue_Marin}
          date={formatDateRange(event?.startDate, event?.endDate)}
          description=
          {event?.description?.split("\n").map((line, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(\$2,500)/g, "<strong>$1</strong>")

                  .replace(/(January 16-18)/g, "<b>$1</b>")
              }}
            />
          ))}
        />
      </section>
      <section className="schedule-section">
        <div className="container">
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
                      Thursday, January <b>16th 2025</b>
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
                      Registration and Bag Pick up <br /> 4:00PM – 6:00PM
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
                      Captain’s Meeting <b>6:00PM</b>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="section-card">
                <h4 className="fw-bold">Day 1 Fishing</h4>
                <p>Friday, January 17th 2025</p>
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
                <p className="text-muted">Saturday, January 18th 2025</p>
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

export default WahooOpen;
