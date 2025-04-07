import React from "react";
import ChubClayInvitationsImage from "../../../assets/images/Chub-Cay-Invitational.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import TournamentInfo from "../../../components/TornamentInfo";
import EventsNavbar from "../../../components/EventsNavbar";
import AwardLine from "../../../assets/images/award-dinner.svg";
import DaySchedule from "../../../components/DaySchedule";

const Information = () => {
  return (
    <div>
      <section className="whoo-open-hero-section">
        <img className="wahoo-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="chubClayInvitational" />
        <TournamentInfo
          title="Chub Cay Invitational 2025 "
          imgSrc={ChubClayInvitationsImage}
          altText={ChubClayInvitationsImage}
          date={"April 11th to April 13th, 2025"}
          description={
            <>
              The Chub Cay Invitational, presented by Fly Zone Fishing and
              hosted by{" "}
              <strong className="bold-text"> Chub Cay Marina and Resort</strong>
              , marks the third and final leg of the highly competitive
              three-part fishing series. The Chub Cay Invitational is Scheduled
              for{" "}
              <b style={{ fontWeight: "bold" }}>April 11 to April 13, 2025,</b>{" "}
              at the stunning{" "}
              <strong className="bold-text"> Chub Cay Marina and Resort</strong>{" "}
              in the Bahamas, this exclusive tournament is designed specifically
              for members of the Chub Cay Club. Following the excitement of the
              previous two events—the Chub Cay Classic and the Chub Cay Open—the
              invitational promises to bring together a select group of anglers
              for a weekend of camaraderie, competition, and celebration of
              sport fishing..
              <br></br>
              <br></br>
              <strong className="bold-text">
                Chub Cay Marina and Resort
              </strong>{" "}
              is a premier destination known for its picturesque landscapes,
              crystal-clear waters, and abundant marine life. The resort offers
              luxurious accommodations and a range of amenities, making it an
              ideal venue for the invitational tournament and providing a
              perfect backdrop for an unforgettable fishing experience.
              <br></br>
              <br></br>
              The Chub Cay promises to be an exhilarating conclusion to the
              three-part tournament series, offering a unique opportunity for
              members of the Chub Cay Club to showcase their fishing skills in a
              beautiful and exclusive setting. With a focus on competition,
              camaraderie, and conservation, this event is expected to foster
              lasting connections among participants while celebrating the sport
              of fishing. Participants are encouraged to check the official Fly
              Zone Fishing website for the latest updates and details as the
              event date approaches.
            </>
          }
        />
      </section>
      <section className="schedule-section">
        <div className="container add-z-index">
          <div className="row g-4">
            <p id="chub-classic-para">
              <span>Secure your spot today</span> and make memories that will
              last a lifetime.{" "}
              <b>Let's make this Chub Cay Invitational a real adventure!</b>
            </p>

            <DaySchedule
              title="Schedule Of Events"
              date="April 11th to April 13th, 2025"
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
              date="Saturday, April 12th 2025"
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
              date="Sunday, April 13th 2025"
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
