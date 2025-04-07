import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const Rules = () => {
  return (
    <div>
      <section className="rules-section">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="burunuBoma" />
        <div className="container mt-5 events-para">
          <h1 className="title">Burunu Boma Rules</h1>
          <div className="d-flex justify-content-center my-3">
            <img src={Line} alt="line" className="responsive-line" />
          </div>
          <div className="rules-s-container">
            <div className="rule-description">
              <p className="rule-title">
                Official Tournament Rules of the Burunu Boma Tournaments
              </p>
            </div>
            <div className="rule-description">
              <p>
                <strong>1.Eligibility:</strong>
               
              </p>
              <ul>
                  <li>
                    ● The tournament is open to both amateur and professional
                    anglers.
                  </li>
                  <li>
                    ● Participants under 18 must submit a guardian’s consent
                    letter and valid ID.
                  </li>
                  <li>● Registration must be completed before the deadline.</li>
                  <li>
                    ● A valid identification document is required for all
                    competitors.
                  </li>
                </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>2. Registration:</strong>
             
              </p>
              <ul>
                  <li>● Registration available via www.burunuboma.com</li>
                  <li>● Early Bird: $1,350 (Until Feb 15)</li>
                  <li>● Normal Registration: $1,500 (Until Apr 1)</li>
                  <li>● Late Registration: $1,750 (Until Apr 9)</li>
                  <li>
                    ● Teams must submit crew lists and required documents by Apr
                    15.
                  </li>
                </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>3.Payment Terms:</strong>{" "}
              </p>
              <ul>
                  <li>
                    ● Proof of payment must be uploaded during registration.
                  </li>
                  <li>
                    ● Registration is confirmed only after payment is verified.
                  </li>
                  <li>
                    ● Fees are non-refundable unless canceled by organizers
                    except in cases covered under Force Majeure.
                  </li>
                </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>4.Force Majeure:</strong>
              </p>
              <ul>
                <li>Organizers are not liable for delays or cancellation due to
                uncontrollable events (e.g., natural disasters, pandemics,
                etc.).</li>
              </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>5. Fishing Zones:</strong>
              </p>
              <ul>
                  <li>
                  ● Fishing must remain within designated Maldivian waters.
                  </li>
                  <li>
                  ● Participants must remain within the designated zone and
                    should provide coordinates at all times.
                  </li>
                  <li>
                  ● Fishing within a restricted area is strictly prohibited.
                  </li>
                </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>6.Equipment:</strong>
              </p>
              <ul>
                <li> ● Only sport fishing gear is allowed.</li>
                <li> ● Nets, traps, and illegal gear are prohibited.</li>
                <li>
                ● Motorized boats are allowed, but participants must comply with
                  local marine regulations.
                </li>
              </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>7.Target Species and Scoring:</strong>
              </p>
              <ul>
                <li>
                ● Only the species specified by the tournament will count
                  towards the competition score.
                </li>
                <li>
                ● A list of eligible species will be provided to participants
                  before the tournament.
                </li>
                <li> ● Fish will be measured by length.</li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>8.Tournament Conduct:</strong>
              </p>
              <ul>
                <li>
                ● All participants must uphold the highest standards of
                  sportsmanship and respect for fellow competitors.
                </li>
                <li>
                ● Any form of cheating, prohibited substances, or
                  unsportsmanlike behavior will result in immediate
                  disqualification.
                </li>
                <li>
                ● Participants must comply with the directives of tournament
                  officials at all times.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>9. Safety:</strong>
              </p>
              <ul>
                <li>
                ● All boats must be equipped with flotation devices (life
                  jackets) for all participants.
                </li>
                <li>
                ● Boats must be in good condition, with all required safety
                  equipment available and functioning.
                </li>
                <li>
                ● Participants are responsible for their own safety and that of
                  their crew members.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>10. Prizes and Awards:</strong>
              </p>
              <ul>
                <li>
                ● A cash prize of USD 25,000.00 or equivalent to MVR will be
                  awarded to the top team based on the total score.
                </li>
                <li> ● Additional prizes will be awarded (individual award)</li>
                <li>
                ● Winners will be announced during the award ceremony on 6th May
                  2025.
                </li>
              </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>11.Liability:</strong>
              </p>
              <ul>
                <li>
                ● Participants are responsible for their own health and safety.
                </li>
                <li>
                ● Organizers are not liable for injuries, loss, or accidents.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>12. Changes to the Rules:</strong>
              </p>
              <ul>
                <li>
                ● The organizers reserve the right to make changes to the
                  tournament rules and regulations.
                </li>
                <li>
                ● Any amendments will be communicated to participants in advance
                  via website and email.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>13. Technical Terms and Conditions:</strong>
              </p>
              <ul>
                <li>
                ● Participants must ensure compliance with all tournament
                  guidelines and local laws.
                </li>
                <li>
                ● Disputes regarding scoring or any tournament decision will be
                  addressed by the tournament committee, whose decision shall be
                  final.
                </li>
                <li>
                ● The tournament officials have the authority to enforce rules,
                  adjust schedules, and manage unforeseen circumstances in the
                  best interest of the event
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
