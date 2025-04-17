import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal";
import BlueMarlin from "../assets/images/blue-marlin.png";
import Camp from "../assets/images/camp.png";
import ClubClayClassicImage from "../assets/images/Chub-Cay-Classic.png";
import ChubClayInvitationsImage from "../assets/images/Chub-Cay-Invitational.png";
import ChubClayOpenImage from "../assets/images/Chub-Cay-Open.png";
import WestEndMeatfishImage from "../assets/images/West-End-Meatfish-Mania_large.png";
import BurunuBomaImage from "../assets/images/BomaMain.png";

import "../assets/css/eventModel.css";

const modalSizeMap = {
  Wahoo: "md",
  Chub: "lg",
  West: "sm",
  Burunu: "sm",
};

const navLinks = {
  Wahoo: [
    {
      path: "/tournaments/wahoo-open",
      title: "January 16th to 18th 2025",
      image: BlueMarlin,
      width: "100%",
      register: false,
      name: "Wahoo Events",
    },
    {
      path: "/tournaments/championship",
      title: "February 13th to 15th 2025",
      image: Camp,
      width: "56%",
      register: false,
    },
  ],
  ChubCay: [
    {
      path: "/tournaments/chub-cay-classic",
      title: "March 13th to 15th, 2025",
      image: ClubClayClassicImage,
      width: "70%",
      register: false,
      name: "Chub Cay Events",
    },
    {
      path: "/tournaments/chub-cay-open",
      title: "March 27th to 29th, 2025",
      image: ChubClayOpenImage,
      width: "57%",
      register: true,
    },
    {
      path: "/tournaments/chub-cay-invitational",
      title: "April 11th to 13th, 2025",
      image: ChubClayInvitationsImage,
      width: "72%",
      register: true,
    },
  ],
  WestEndMeat: [
    {
      path: "/tournaments/west-end-meatfish-mania",
      title: "May 8th to 10th, 2025",
      image: WestEndMeatfishImage,
      width: "71%",
      register: true,
      name: "West And MeatFish",
    },
  ],
  BurunuBoma: [
    {
      path: `/tournaments/burunu-boma`,
      title: "May 2nd to 4th, 2025",
      image: BurunuBomaImage,
      width: "61%",
      register: false,
      name: "Burunu Boma",
    },
  ],
};

export default function EventsModal({ event, onClose }) {
  const [isModalVisible, setModalVisible] = useState(true);
  const modalRef = useRef(null);
  const formatName = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  const eventData = navLinks[formatName(event?.name)]; // match array from navLinks
  const modalSize = modalSizeMap[event?.name] || "lg";

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

  if (!isModalVisible || !eventData) return null;

  return (
    <Modal show={isModalVisible} centered size={modalSize}>
      <div ref={modalRef}>
        <h4 className="textHeading-1">{eventData[0]?.name || "Event Details"}</h4>
        <div className="event-model-container">
          {eventData.map((e, index) => (
            <div key={index} className="event-model-card">
              <div className="modal-img">
                <img src={e.image} alt={e.title} width={e.width} />
              </div>
              <p className="card-text">{e.title}</p>
              <div className="event-model-btn">
                {e.name !== "Burunu Boma" && (
                  <a
                    href={
                      e.name === "West And MeatFish Events"
                        ? "/west-end-meat-fish/register/2"
                        : e.name === "West And MeatFish"
                        ? "/west-end-meat-fish/register/3"
                        : "/register"
                    }
                    className={e.register ? "btn-register" : "disabled-new"}
                  >
                    {e.register ? "Register" : "Event Closed"}
                  </a>
                )}
                <a href={e.path} className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
