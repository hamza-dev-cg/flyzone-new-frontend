import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const WestEndMeatfishMadnessOptional = () => {
  return (
    <section className="rules-section">
      <img className="rules-bg" src={EventInformationBg} alt="fish" />
      <EventsNavbar basePath="/events" links="westEndMeatFishMadness" />
      <div className="container mt-5 events-para">
        <h1 className="title">West End Meatfish Madness Optional</h1>
        <div className="d-flex justify-content-center my-3">
          <img src={Line} alt="line" className="responsive-line" />
        </div>
        <div className="rules-s-container">
          <div className="rule-description">
            <p className="rule-title">
              Official Tournament Rules of the West End Meatfish Tournaments
            </p>
          </div>

          <div className="rule-description">
            <p><strong>Optional Entries Select Each Level Entered:</strong></p>
            <ul>
              <li>$500 - Level 1 - Heaviest Fish (65/25/10 Split)</li>
              <li>$1000 - Level 2 - Heaviest Fish (65/25/10 Split)</li>
              <li>$1500 - Level 3 - Heaviest Fish Winner Take All</li>
            </ul>
          </div>

          <div className="rule-description">
            <p><strong>Optional Entries Select Each Level Entered:</strong></p>
            <ul>
              <li>$500 - Level 1 - Heaviest Stringer (65/25/10 Split)</li>
              <li>$1000 - Level 2 - Heaviest Stringer (65/25/10 Split)</li>
              <li>$1000 - Level 3 - Heaviest Stringer Winner Take All</li>
            </ul>
          </div>

          <div className="rule-description">
            <p><strong>Tuna Division</strong></p>
            <p>Optional Entries Select Each Level Entered:</p>
            <ul>
              <li>$500 - Level 1 - Heaviest Tuna (65/25/10 Split)</li>
              <li>$1000 - Level 2 - Heaviest Tuna (65/25/10 Split)</li>
              <li>$2500 - Level 3 - Heaviest Tuna Winner Take All</li>
              <li>$1000 - Level 4 - Heaviest Stringer - Select Up to 5 Qualifying Tuna (65/25/10 Split)</li>
            </ul>
          </div>

          <div className="rule-description">
            <p><strong>Meatfish Division</strong></p>
            <p>Optional Entries Select Each Level Below:</p>
            <ul>
              <li>$500 - Level 1 - Heaviest Dolphin (65/25/10 Split)</li>
              <li>$500 - Level 2 - Heaviest Wahoo (65/25/10 Split)</li>
            </ul>
          </div>

          <div className="rule-description">
            <p><strong>Big Fish Daily</strong></p>
            <p>Optional Entries Select Each Level Below:</p>
            <ul>
              <li>$500 - Level 1 - Heaviest Daily Fish Weighed Each Day (Winner Each Day)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WestEndMeatfishMadnessOptional;