import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import WestEndMadnessImage from "../../../assets/images/West_End_Meatfish_Madness_Compressed__1___1_-removebg.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import TournamentInfo from "../../../components/TornamentInfo";
import DaySchedule from "../../../components/DaySchedule";

const Information = () => {
  return (
    <div>
      <section className="whoo-open-hero-section">
        <img className="wahoo-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="westEndMeatFishMadness" />
        <TournamentInfo
          title={
            <>
              West End <br></br> Meatfish Madness
            </>
          }
          imgSrc={WestEndMadnessImage}
          altText={WestEndMadnessImage}
          date={"April 24th to April 26th, 2025"}
          description={
            <>
              Fly Zone Fishing is thrilled to announce the West End MeatFish
              Madness 2025, a premier fishing tournament hosted at the scenic
              Blue Marlin Cove in the beautiful West End of Grand Bahama. This
              exciting event will take place from{" "}
              <b style={{ fontWeight: "bold" }}>April 24 to April 26, 2025, </b>{" "}
              drawing anglers from around the world to compete for prizes while
              fishing for Tuna, Mahi-Mahi, and Wahoo in the crystal-clear waters
              of the Bahamas.
              <br></br>
              <br></br>
              West End offers an ideal setting for anglers of all levels,
              providing exceptional fishing grounds, world-class competition,
              and unforgettable views. The tournament promises not only the
              thrill of fishing but also an opportunity to connect with fellow
              enthusiasts and experience the rich marine life of the Bahamas.
              Whether you're a seasoned pro or a newcomer, the West End MeatFish
              Madness guarantees a memorable and exhilarating experience. Don’t
              miss out—sign up now to be part of the action!
            </>
          }
        />
      </section>
      <section className="schedule-section">
        <div className="container add-z-index">
          <div className="row g-4">
            <p id="chub-classic-para">
              <span>Secure your spot today</span>
              and make memories that will last a lifetime. Let's make this{" "}
              <b>West End Madness a Invitational adventure!</b>
            </p>
            <DaySchedule
              title="Schedule Of Events"
              date="April 24th to April 26th, 2025"
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
              date="Friday, April 25th 2025"
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
              date="Saturday, April 26th 2025"
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
            <p className="award-text">Awards ceremony 6:00PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
