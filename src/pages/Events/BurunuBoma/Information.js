import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import BurunuBomaImage from "../../../assets/images/BomaMain.png";
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
        <EventsNavbar basePath="/events" links="burunuBoma" />
        <TournamentInfo
          title={event?.name}
          imgSrc={BurunuBomaImage}
          altText={BurunuBomaImage}
          date={formatDateRange(event?.startDate, event?.endDate)}
          description=
          {event?.description?.split("\n").map((line, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(May 2 to May 4, 2025)/g, "<b>$1</b>")
              }}
            />
          ))}
        />
      </section>
      <section className="schedule-section">
        <div className="container add-z-index">
          <div className="row g-4">
            <p id="chub-classic-para">
              <span>Lock in your spot now</span>
              and experience the thrill of fishing in the Maldives. Let’s make
              <b> Brunu Boma the highlight of your year!</b>
            </p>
            <DaySchedule
              title="Schedule Of Events"
              date="May 2nd to May 4th, 2025"
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
              date="Saturday, May 3th 2025"
              events={[
                { time: "7:00AM", text: "Call for 'Lines In'" },
                { time: "4:00PM", text: "Lines OUT" },
                {
                  time: "6:00PM",
                  text: "All boats must be checked in or visible to the tournament officials",
                },
              ]}
            />
            <DaySchedule
              title="Day 2 Fishing"
              date="Sunday, May 4th 2025"
              events={[
                { time: "7:00AM", text: "Call for 'Lines In'" },
                { time: "4:00PM", text: "Lines OUT" },
                {
                  time: "6:00PM",
                  text: "All boats must be checked in or visible to the tournament officials",
                },
              ]}
            />
          </div>
          <div className="text-center mt-5">
            <p className="award-text">Awards ceremony 7:30PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
