import React from "react";
import WestEndImage from "../../assets/images/WestEndMeatfishManialarge.svg";
import ChubCayClassicImage from "../../assets/images/Chub-Cay-Classic.svg";
import BlueMarlinCoveImage from "../../assets/images/blue-marlin.svg";
import FlyZoneLogo from "../../assets/images/Fly-Zone-Logo.png";
import NextEventsWrpper from "./style";
import NextEventImg1 from "../../assets/images/next-event-1.svg";
import NextEventImg2 from "../../assets/images/next-event-2.svg";
import NextEventImg3 from "../../assets/images/next-event-3.svg";

const events = [
  {
    title: "West End Meatfish Mania",
    date: "April 24th to April 26th, 2025",
    image: WestEndImage,
    buttonText: "Register",
    comingSoon: false,
    background: NextEventImg1,
  },
  {
    title: "Chub Cay Classic 2025",
    date: "April 24th to April 26th, 2025",
    image: ChubCayClassicImage,
    buttonText: "Register",
    comingSoon: false,
    background: NextEventImg2,
  },
  {
    title: "Blue Marlin Cove Wahoo Open",
    date: "Coming Soon",
    image: BlueMarlinCoveImage,
    buttonText: null,
    comingSoon: true,
    background: NextEventImg3,
  },
];

const EventCard = ({ event }) => {
  return (
    <div
      className=" event-card "
      style={{
        backgroundImage: `url(${event.background})`,
      }}
    >
      <div className="d-flex flex-column justify-content-between h-100 ">
        <div className="  d-flex flex-col justify-content-between align-items-start">
          <div className="text-side ">
            <img
              src={FlyZoneLogo}
              alt="FlyZone"
              className="mb-2"
              style={{ height: 25 }}
            />
            <h5 className="fw-bold">{event.title}</h5>
            <p className="text-muted mb-3">{event.date}</p>
          </div>
          <img src={event.image} alt={event.title} className=" event-image" />
        </div>

        <div className="  d-flex gap-2 event-buttons">
          <button className="btn btn-outline-dark btn-sm">Learn More</button>
          {!event.comingSoon && (
            <button className="btn btn-dark btn-sm">{event.buttonText}</button>
          )}
        </div>
      </div>
    </div>
  );
};

const NextEvents = () => {
  return (
    <NextEventsWrpper>
      <div className="container-md container-xxl my-5">
        <h1 className="leaderboard-h1 text-center mb-4">
          Stay Hooked on <span>What’s Next</span>
        </h1>
        <div className=" d-flex gap-2 flex-column flex-lg-row justify-content-center">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </NextEventsWrpper>
  );
};

export default NextEvents;
