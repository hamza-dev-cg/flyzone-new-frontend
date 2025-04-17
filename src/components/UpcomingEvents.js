import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Correct from "../assets/correct.svg";
import Classic from "../assets/images/Chub-Cay-Classic.png";
import ChubClayOpenImage from "../assets/images/Chub-Cay-Open.png";
import ChubClayInvitationsImage from "../assets/images/Chub-Cay-Invitational.png";
import WestEndMeatfishImage from "../assets/images/West-End-Meatfish-Mania_large.png";
import BurunuBomaImage from "../assets/images/BomaMain.png";
import "../assets/css/upComingEvent.css";
import { formatDateRange } from '../utils/helpers'

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  useGetAllTournamentEventMutation,
} from "../features/tournaments/api";
const eventAssets = {
  "chub-cay-classic-2025": {
    image: Classic,
    width: 400,
  },
  "chub-cay-open-2025": {
    image: ChubClayOpenImage,
    width: 320,
  },
  "chub-cay-invitational-2025": {
    image: ChubClayInvitationsImage,
    width: 400,
  },
  "west-end-meatfish-mania": {
    image: WestEndMeatfishImage,
    width: 370,
  },
  "burunu-boma": {
    image: BurunuBomaImage,
    width: 250,
  },
};

const EventItem = ({ event }) => {
  const asset = eventAssets[event.slug] || {};

  return (
    <div className="container d-flex flex-column mt-4 flex-xl-row gap-5 events-inner">
      <div className="hero-left ">
        <h1 className="champ-h1">{event.name}</h1>
        <p className="hero-p">
          {event.description?.split(' ').slice(0, 90).join(' ')}...
        </p>

        <span className="d-flex justify-content-between">
          <ul className="list-unstyled text-start d-flex flex-column gap-4">
            <li className="d-flex align-items-center gap-2">
              <div className="checkmark-circle">
                <img src={Correct} alt="Checkmark" width={30} />
              </div>
              <strong>{formatDateRange(event.startDate, event.endDate)}</strong>
            </li>
            {[
              "blue-marlin-cove-wahoo-open",
              "blue-marlin-cove-championship",
              "chub-cay-classic-2025",
              "chub-cay-open-2025",
              "chub-cay-invitational-2025",
              "burunu-boma",
            ].includes(event.slug) ? (
              <>
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>8:00AM - Call for 'Lines In'</strong>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>3:00PM - Lines OUT</strong>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>
                    5:00PM - All boats must be back in channel marker lines
                  </strong>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="checkmark-circle">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>5:30PM - Scale closes</strong>
                </li>
              </>
            ) : (
              <>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>Registration and Bag Pick up 4:00PM–6:00PM</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>Captain’s Meeting 6:00PM on 8th May</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>7:00AM - Call for 'Lines In'</strong>
                </li>
                <li className="d-flex align-items-center">
                  <div className="checkmark-circle me-2">
                    <img src={Correct} alt="Checkmark" width={30} />
                  </div>
                  <strong>4:00PM - Lines OUT</strong>
                </li>
              </>
            )}
            <li>
              <Link className="text-decoration-none text-white" to={`/tournaments/${event.slug}`} state={{ event }}>
                <button className="contact-button mt-0">More Information</button>
              </Link>
            </li>
          </ul>
          <div className="d-none d-lg-flex flex-column">
            <img
              src={asset.image}
              width={asset.width}
              className="upcoming-image"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [getEvents] = useGetAllTournamentEventMutation();
  const [eventData, setEventData] = useState(null)

  const fetchTournaments = async () => {
    try {
      const response = await getEvents();
      if (response?.data?.tournaments) {
        setEventData(response.data.tournaments);
      }
    } catch (err) {
      console.log("Something went wrong while fetching tournaments.");
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const today = new Date();

  const upcomingEvents = eventData
    ?.filter((event) => {
      const eventEndDate = new Date(event.endDate);
      return eventEndDate > today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));



  return (
    <div className="mb-4 ">
      <h1 className="upcoming-event-head">
        Upcoming <span>Events</span>
      </h1>
      {upcomingEvents?.length === 0 ? (
        <p className="text-center">No upcoming events.</p>
      ) : (
        <div
          id="carouselExampleDark"
          className="carousel slide"
          data-bs-interval="false"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {upcomingEvents?.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {upcomingEvents?.map((event, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <EventItem event={event} />
              </div>
            ))}
          </div>

          {/* Left and Right Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
