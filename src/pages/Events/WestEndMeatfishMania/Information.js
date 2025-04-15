import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import WestEndMeatfishImage from "../../../assets/images/West-End-Meatfish-Mania_large.png";
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
        <EventsNavbar basePath="/events" links="westEndMeatFishMania" />
        <div class="text-center mt-5 d-block d-lg-none d-md-none">
          <a class="register-top-show" href="/west-end-meat-fish/register/3">Register</a>
        </div>
        <TournamentInfo
          title= {event?.name}
          imgSrc={WestEndMeatfishImage}
          altText={WestEndMeatfishImage}
          date={formatDateRange(event?.startDate , event?.endDate)}
          description=
          {event?.description?.split("\n").map((line, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(May 8 to May 10, 2025,)/g, "<b>$1</b>")
              }}
            />
          ))}
        />
      </section>
      <section className="schedule-section">
        <div className="container add-z-index">
          <div className="row g-4">
            <p id="chub-classic-para">
              <span>Secure your spot today</span>
              and make memories that will last a lifetime. Let's make this{" "}
              <b>West End Meatfish Mania a real adventure!</b>
            </p>
            <DaySchedule
              title="Schedule Of Events"
              date="May 8th to May 10th, 2025"
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
              date="Friday, May 9th 2025"
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
              date="Saturday, May 10th 2025"
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
