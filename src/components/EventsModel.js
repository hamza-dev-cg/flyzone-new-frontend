import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal";
import BlueMarlin from "../assets/images/blue-marlin.png";
import Camp from "../assets/images/camp.png";
import ClubClayClassicImage from "../assets/images/Chub-Cay-Classic.png";
import ChubClayInvitationsImage from "../assets/images/Chub-Cay-Invitational.png";
import ChubClayOpenImage from "../assets/images/Chub-Cay-Open.png";
import WestEndMeatfishImage from "../assets/images/West-End-Meatfish-Mania_large.png";
import BurunuBomaImage from "../assets/images/BomaMain.png";
import { useCreateTournamentCategoryForAdminMutation } from '../features/tournaments/api'
import { formatDateRange } from '../utils/helpers'
import { Link } from "react-router-dom";
import "../assets/css/eventModel.css";

const modalSizeMap = {
  "wahoo": "md",
  "chub-cay": "lg",
  "west-end-meat": "sm",
  "burunu-boma": "sm",
};

const eventAssets = {
  "blue-marlin-cove-wahoo-open": {
    image: BlueMarlin,
    width: "100%",
  },
  "blue-marlin-cove-championship": {
    image: Camp,
    width: "56%",
  },
  "chub-cay-classic-2025": {
    image: ClubClayClassicImage,
    width: "70%",
  },
  "chub-cay-open-2025": {
    image: ChubClayOpenImage,
    width: "57%",
  },
  "chub-cay-invitational-2025": {
    image: ChubClayInvitationsImage,
    width: "72%",
  },
  "west-end-meatfish-mania": {
    image: WestEndMeatfishImage,
    width: "71%",
  },
  "burunu-boma": {
    image: BurunuBomaImage,
    width: "61%",
  },
}
export default function EventsModal({ event, onClose }) {
  const [eventdata, setEventData] = useState(null)
  const [getEvents] = useCreateTournamentCategoryForAdminMutation();
  const fetchEvents = async () => {
    try {
      const response = await getEvents(event.id);
      if (response?.data?.events) {
        
        setEventData(response.data.events);
      }
    } catch (err) {
      console.log("Something went wrong while fetching tournaments.");
    }
  };

  useEffect(() => {
    fetchEvents()
  }, [event])
  const [isModalVisible, setModalVisible] = useState(true);
  const modalRef = useRef(null);
  const modalSize = modalSizeMap[event.slug] || "lg";
  console.log('event Data ' , eventdata);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalVisible(false);
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isModalVisible || !eventdata) return null;

  return (
    <Modal show={isModalVisible} centered size={modalSize}>
      <div ref={modalRef}>
        <h4 className="textHeading-1">{event?.name}</h4>
        <div className="event-model-container">
          {eventdata?.map((event, index) => {
            const asset = eventAssets[event.slug] || {};
            return (
              <div key={index} className="event-model-card">
                <div className="modal-img">
                  <img
                    src={asset.image}
                    alt={event.name}
                    width={asset.width || "100%"} // fallback to 100%
                  />
                </div>
                <p className="card-text">
                  {formatDateRange(event.startDate, event.endDate)}
                </p>
                <div className="event-model-btn">
                  {event.slug !== "burunu-boma" && (
                    <a
                      href={
                        event.slug === "west-end-meatfish-mania"
                          ? `/west-end-meat-fish/register/${event.id}`
                          : "/register"
                      }
                      className={`${new Date(event.endDate) < new Date()
                        ? "disabled-new"
                        : "btn-register"
                        }`}
                    >
                      {new Date(event.endDate) < new Date()
                        ? "Event Closed"
                        : "Register"}
                    </a>
                  )}
                  <Link
                    to={`/tournaments/${event.slug}/${event.id}`}
                    state={{ event }}
                    className="btn-learn-more"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>

  );
}
