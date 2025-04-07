import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import BurunuBomaImage from "../../../assets/images/BomaMain.png";
import TournamentInfo from "../../../components/TornamentInfo";
import DaySchedule from "../../../components/DaySchedule";

const Information = () => {
  return (
    <div>
      <section className="whoo-open-hero-section">
        <EventsNavbar basePath="/events" links="burunuBoma" />
        <TournamentInfo
          title={<>Burunu Boma</>}
          imgSrc={BurunuBomaImage}
          altText={BurunuBomaImage}
          date={"May 2nd to May 4th, 2025"}
          description={
            <>
              Brunu Boma 2025, hosted by the Visit Maldives Club, is a
              high-energy fishing competition set in the beautiful waters of
              Marina Bay, Crossroads Maldives. Taking place from{" "}
              <b style={{ fontWeight: "bold" }}>May 2 to May 4, 2025</b>, this
              three-day event welcomes anglers from around the world to showcase
              their skills and sportsmanship in a vibrant, eco-conscious
              setting. Designed to unite resorts and anglers in a spirit of
              friendly rivalry, Brunu Boma shines a light on ethical fishing,
              teamwork, and vibrant community experiences.
              <br></br>
              <br></br>
              Participants will fish for top honors while enjoying the
              picturesque waters of the Maldives — an ideal destination for both
              seasoned pros and rising anglers alike. With a lively festival
              atmosphere, merchandise booths, and on-site entertainment, Brunu
              Boma offers far more than just a competition. Whether you're there
              for the trophy or the tropical vibes, this event is your gateway
              to a one-of-a-kind fishing adventure. Mark your calendar and get
              ready to compete, connect, and celebrate in one of the world’s
              most scenic and breathtaking fishing destinations!
            </>
          }
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
