import React from "react";
import AwardLine from "../../../assets/images/award-dinner.svg";
import ClubClayClassicImage from "../../../assets/images/Chub-Cay-Classic.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import EventsNavbar from "../../../components/EventsNavbar";
import TournamentInfo from "../../../components/TornamentInfo";
import DaySchedule from "../../../components/DaySchedule";
import { useLocation } from "react-router-dom";
import { formatDateRange } from '../../../utils/helpers'
const Information = () => {
    const location = useLocation();
    const event = location?.state?.event;
  return (
    <div>
      <section className="whoo-open-hero-section">
        <img className="wahoo-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="chubClayClassic" />
        <TournamentInfo
          title= {event?.name}
          imgSrc={ClubClayClassicImage}
          altText="Chub Cay Classic"
          date={formatDateRange(event?.startDate , event?.endDate)}
          description=
          {event?.description?.split("\n").map((line, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(Chub Cay Marina and Resort)/g, "<strong>$1</strong>")
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
              <b>Let's make this Chub Cay Classic a real adventure!</b>
            </p>

            <DaySchedule
              title="Schedule Of Events"
              date="March 13th to March 15th, 2025"
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
              date="Friday, March 14th 2025"
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
              date="Saturday, March 15th 2025"
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

export default Information;
