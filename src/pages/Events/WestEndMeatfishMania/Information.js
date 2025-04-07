import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import WestEndMeatfishImage from "../../../assets/images/West-End-Meatfish-Mania_large.png";
import TournamentInfo from "../../../components/TornamentInfo";
import DaySchedule from "../../../components/DaySchedule";

const Information = () => {

  return (
    <div>
      <section className="whoo-open-hero-section">
        <EventsNavbar basePath="/events" links="westEndMeatFishMania" />
        <TournamentInfo
          title={
            <>
              West End <br></br> Meatfish Mania
            </>
          }
          imgSrc={WestEndMeatfishImage}
          altText={WestEndMeatfishImage}
          date={"May 8th to May 10th, 2025"}
          description={
            <>
              Fly Zone Fishing proudly presents the West End MeatFish Mania
              2025, an electrifying fishing tournament set against the stunning
              backdrop of Blue Marlin Cove in West End, Grand Bahama. Taking
              place from{" "}
              <b style={{ fontWeight: "bold" }}>May 8 to May 10, 2025,</b> this
              action-packed event invites anglers from across the globe to
              battle it out for top prizes while targeting Tuna, Mahi-Mahi, and
              Wahoo in the pristine waters of the Bahamas.
              <br></br>
              <br></br>
              With its world-class fishing grounds, breathtaking scenery, and
              competitive yet welcoming atmosphere, West End MeatFish Mania is
              the ultimate event for fishing enthusiasts of all skill levels.
              Whether you're chasing the thrill of the catch or looking to
              connect with fellow anglers, this tournament delivers an
              unforgettable experience. Secure your spot today and get ready for
              an epic fishing adventure!
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
