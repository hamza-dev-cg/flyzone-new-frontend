import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const Rules = () => {
  return (
    <div>
      <section className="rules-section">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="westEndMeatFishMadness" />
        <div className="container mt-5 events-para">
          <h1 className="title"> West End Meatfish Madness Rules</h1>
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
              <p><strong>1. Registration:</strong> The basic entry registration fee is $1500 per boat. A maximum of 8 anglers is allowed per boat.</p>
            </div>

            <div className="rule-description">
              <p><strong>2. Fishing Tournament Hours:</strong> </p>
              <ul>
                <li>Lines in: <strong>7:00 AM</strong></li>
                <li>Lines out: <strong>4:00 PM</strong></li>
                <li>All boats must be checked in or visible to the tournament officials by 6:00 PM.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>3. Permit Requirements:</strong> All teams must possess a Bahamas Fishing Permit.</p>
            </div>

            <div className="rule-description">
              <p><strong>4. Boundaries:</strong> There are no boundaries within Bahamian waters.</p>
            </div>

            <div className="rule-description">
              <p><strong>5. Tackle Requirements:</strong></p>
              <ul>
                <li>All fish must be caught on a fishing rod and manually reeled in.</li>
                <li>Permitted methods: Trolling, chunking, jigging, casting, and kite fishing.</li>
                <li>No limits on lines, lures, or teasers.</li>
                <li>Prohibited gear: Greensticks, darts, and harpoons.</li>
                <li>Electric reels may be used for hookless purposes (e.g., dredges, teasers, planers).</li>
                <li>Live bait is permitted.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>6. Eligible Species:</strong> Tuna, Dolphin, and Wahoo (Minimum weight: 20 lbs).</p>
            </div>

            <div className="rule-description">
              <p><strong>7. Fish Limit:</strong> A maximum of 5 fish may be weighed per boat per day. Each fish must weigh a minimum of 20 pounds. Fish below this weight will not count.</p>
            </div>

            <div className="rule-description">
              <p><strong>8. Passing a Fish to Another Vessel:</strong> Strictly prohibited.</p>
            </div>

            <div className="rule-description">
              <p><strong>9. Fish Weigh-Ins:</strong></p>
              <ul>
                <li>If a lineup occurs outside the marina, boats must confirm with tournament officials before the designated times.</li>
                <li>Tournament officials have final discretion on which fish may be weighed.</li>
                <li>No mutilated fish will be weighed—determined by the tournament weighmaster.</li>
                <li>All fish are subject to examination by tournament officials or designated representatives.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>10. Scoring:</strong></p>
              <ul>
                <li>Each fish meeting the weight requirement earns 1 point per pound.</li>
                <li>The highest overall score wins the tournament.</li>
                <li>Mutilated fish are disqualified.</li>
                <li>The decision of the weighmaster is final.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>11. Tie-Breaker:</strong> In the event of a tie, the purse will be split between the tied winners at the level where the tie occurs.</p>
            </div>

            <div className="rule-description">
              <p><strong>12. Protests and Winnings:</strong></p>
              <ul>
                <li>Protests require a $1000 non-refundable protest fee.</li>
                <li>Tournament officials reserve the right to request a polygraph test for any or all winning teams at their discretion.</li>
                <li>Winnings will be paid within 30 days after receiving a completed W-9 form.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>13. Responsible Seamanship:</strong> Boat captains, crews, and anglers participate at their own risk. Captains must determine whether to fish based on weather conditions, boat seaworthiness, and their seamanship skills.</p>
            </div>

            <div className="rule-description">
              <p><strong>14. Disclaimer:</strong></p>
              <ul>
                <li>Participants enter at their own risk and agree to hold the tournament and its affiliates harmless from liability.</li>
                <li>The tournament officials reserve the right to refuse entry to any boat, team, or person.</li>
                <li>Participants consent to the use of their photos or audio recordings for promotional purposes without compensation.</li>
              </ul>
            </div>

            <div className="rule-description">
              <p><strong>15. Credit Card Transaction Fee:</strong> A 4% transaction fee applies to all credit card payments.</p>
            </div>
          </div>


        </div>
      </section>

    </div>
  );
};

export default Rules;
