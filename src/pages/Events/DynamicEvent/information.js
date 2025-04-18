import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import ChubClayOpenImage from "../../../assets/images/Chub-Cay-Open.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import TournamentInfo from "../../../components/TornamentInfo";
import AwardLine from "../../../assets/images/award-dinner.svg";
import DaySchedule from "../../../components/DaySchedule";
import { useLocation } from "react-router-dom";
import { formatDateRange } from '../../../utils/helpers'
const ChubClayOpen = () => {
  const location = useLocation();
  const event = location?.state?.event;
  return (
    <div>
      <section className="whoo-open-hero-section">
        <img className="wahoo-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="chubClayOpen" />
        <TournamentInfo
         title= {event?.name}
          imgSrc={ChubClayOpenImage}
          altText={ChubClayOpenImage}
          date={formatDateRange(event?.startDate , event?.endDate)}
          description=
          {event?.description?.split("\n").map((line, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(Chub Cay Marina and Resort)/g, "<strong>$1</strong>")
                  .replace(/(March 27 to March 29, 2025,)/g, "<b>$1</b>")
              }}
            />
          ))}
        />
      </section>
      <section className="schedule-section">
        <div className="container add-z-index">
          <div className="row g-4">
            <p id="chub-classic-para">
              <span>Secure your spot today</span> and make memories that will
              last a lifetime.{" "}
              <b>Let's make this Chub Cay Open a real adventure!</b>
            </p>

            <DaySchedule
              title="Schedule Of Events"
              date="March 27th to March 29th, 2025"
              events={[
                {
                  time: "4:00PM – 6:00PM",
                  text: "Registration and Bag Pick up",
                },
                { time: "6:00PM", text: "Captain’s Meeting" },
              ]}
            />

            <DaySchedule
              title="Day 1 Fishing"
              date="Friday, March 28th 2025"
              events={[
                { time: "8:00AM", text: "Call for 'Lines In'" },
                { time: "3:00PM", text: "Lines OUT" },
                {
                  time: "5:00PM",
                  text: "All boats must be back in channel marker lines",
                },
                { time: "5:30PM", text: "Scale closes" },
              ]}
            />

            <DaySchedule
              title="Day 2 Fishing"
              date="Saturday, March 29th 2025"
              events={[
                { time: "8:00AM", text: "Call for 'Lines In'" },
                { time: "3:00PM", text: "Lines OUT" },
                {
                  time: "5:00PM",
                  text: "All boats must be back in channel marker lines",
                },
                { time: "5:30PM", text: "Scale closes" },
              ]}
            />
          </div>
          <div className="text-center mt-5">
            <p className="award-text">Awards ceremony 7:00PM</p>
          </div>
        </div>
      </section>
      <div className="award-dinner container">
        <h1>Dinner</h1>
        <img src={AwardLine} alt="no-line" />
        <p className="mt-5">
          <b className="bold-text">6:00 p.m. – 9:00 p.m.</b> Complimentary
          buffet dinner for tournament entrants at{" "}
          <b className="bold-text">Clubhouse Restaurant</b>. In order to best
          accommodate everyone, a maximum of <b>6 GUESTS PER BOAT </b> are
          welcome to attend. Dinner starts at
          <b className="bold-text"> 6:00 p.m. until 9:00 p.m.</b>
        </p>
      </div>
    </div>
  );
};

export default ChubClayOpen;
