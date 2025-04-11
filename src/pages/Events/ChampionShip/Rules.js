import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const Rules = () => {
  return (
    <div>
      <section className="rules-section">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="championship" />
        <div className="container mt-3 events-para">
          <h1 className="title">Tournament Rules</h1>
          <div className="d-flex justify-content-center my-3">
            <img src={Line} alt="line" className="responsive-line" />
          </div>
          <div className="rules-s-container">
            <div className="rule-description">
              <p>
                <span className="rule-title">1. Registration:</span> $2500 –
                Teams may register for the tournament online. The Entry Fee
                covers the boat tournament participation and up to 4 registered
                participants per boat. Boats can have an unlimited number of
                anglers. Payment may be made by checks or credit card
                (MasterCard, Visa & American Express accepted). A 4% service
                charge will be added to all credit card transactions. Please
                make checks payable to Fly Zone Fishing LLC.Registration fee is
                non-refundable within 45 days of the beginning of the event!
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">2. Entry Forms:</span> All entry
                forms must be filled out by all participants. Tournament
                officials reserve the right to refuse application or entry into
                the tournament at their discretion with or without cause.
                Anglers: Each boat may register as many anglers as they choose.
                All anglers should be listed on the form. Please notify the
                committee of any angler changes prior to the start of fishing.
                ALL ANGLERS MUST HAVE A VALID BAHAMAS FISHING & CRUISING
                LICENSE!
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">3. Fishing Hours:</span> Boats may
                leave Blue Marlin Cove Marina at 6:00 am with fishing also
                beginning at 6:00 am.ALL boats must be in the marina by 4:00 pm.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">4. No Boundaries:</span> There are
                no geographical boundaries for the tournament.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">5. Eligible Species:</span> Wahoo.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">6. Fish Limit:</span> A maximum of
                5 Wahoo can be weighed in per boat each day. Each fish must
                weigh a minimum of 20 lbs. Fish that do not meet these
                requirements will not count. A combined total aggregate weight
                of the two fishing days will declare the winner. All fish must
                be weighed in fresh and edible condition. No mutilated fish or
                frozen fish scored.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">7. Winners:</span> This is an
                aggregate tournament. Tournament scoring is a points system.
                EACH TEAM CAN WEIGH UP TO 5 WAHOO PER DAY. The minimum
                tournament-eligible weight to score is 20 pounds. 1 point per
                pound is awarded. The five largest Wahoo per day will count as
                scoring fish. The highest aggregate score of the two fishing
                days determines winners. In the event of a tie, the boat that
                weighed in earliest on time on the second fishing day will be
                declared the winner.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">8. Tackle:</span> All fish must be
                caught on rod and reel. Wire lines are permitted. No electric
                reels permitted.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">9. Tournament Channel:</span> The
                tournament committee will operate on Channel 80. Channel 72 will
                be used as an alternate.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">10. Check-In:</span> No lines in or
                out of the water will be announced. All boats with fish to weigh
                must be visually no later than 4:00 PM, regardless of hook-ups.
                Boats that do not check-in by 4:00 PM will not be eligible to
                weigh their fish. Please allow yourself enough time to reach the
                check-in at Blue Marlin Cove Marina.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">11. Weigh-In:</span> The scale will
                open at 3:00 PM. All fish must be brought to the weigh station
                in the boat they were caught on. Transferring of fish to another
                boat will result in disqualification. All decisions of the
                weighmaster are final.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">12. Weather:</span> If weather
                conditions arise deemed unsafe for the average registered boat,
                by the tournament officials, the tournament may be called off
                for that day. No refunds will be made in the event of
                cancellation. Any notice of cancellation will be broadcast on
                channel 80. If Saturday is weathered out, the tournament will be
                moved to a one-day tournament on Sunday. The tournament
                officials do not ensure the safety of registered anglers or
                other occupants of their vessels. Captains, anglers, and all
                other members must determine the seaworthiness of their boat.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">13. Protests:</span> All protests
                must be made within 1 hour of the conclusion of weigh-in along
                with $1,000 cash or check to the tournament officials. Protests
                should be made based on first-hand eyewitness information. The
                deposit will be returned only if the protest is upheld. If the
                protest is denied, you forfeit the total amount of $1,000. The
                Tournament Committee will resolve all decisions and they are
                final.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">14. Polygraph:</span> By entering
                the tournament all captains, anglers, and occupants voluntarily
                consent to a polygraph examination as deemed necessary. Any
                refusal or untruthful answers will result in disqualification
                without notice. Disqualification will eliminate prize money,
                awards, and entrance fees.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">15. Release:</span> By signing the
                entry form, all captains, anglers, and occupants of their boat
                hereby consent that tournament officials may use without payment
                or restriction, any photographs, video, or interviews in which
                he or she may appear for any purpose whatsoever, including but
                not limited to resale, advertising, and promotional material.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">16. Cheating:</span> Cheating will
                be grounds for automatic disqualification from the tournament.
              </p>
            </div>

            <div className="rule-description">
              <p>
                <span className="rule-title">17. Taxes & Fees:</span> A 10%
                administration fee is deducted from all optional jackpots, so
                the NET prize money payout on all categories is 90% of gross
                fees. All monies won in the tournament are subject to taxing,
                and you will receive a 1099 form from Fly Zone Fishing, LLC, and
                will be asked to execute a W-9 and wire transfer information.
                Please expect a 30-day or less from the date of receiving the
                needed paperwork to processing receipt of any cash winnings.
                Winners will be paid via wire transfer only; no wire fees apply.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="schedule-section">
        <div className="container text-center mt-5">
          <h1 className="rule-h1 text-center text-lg-start">
            Wahoo Tournament <br></br>
            Calcutta
          </h1>
          <ul className="list-unstyled text-center text-lg-start d-flex gap-4 mt-5 flex-column flex-lg-row">
            <div>
              <li className="d-flex align-items-start gap-2">
                <div className="checkmark-circle mt-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="url(#paint0_linear_47_3299)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_3299"
                        x1="15.9999"
                        y1="31.0538"
                        x2="15.9999"
                        y2="1.48336e-09"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B7FE" />
                        <stop offset="1" stop-color="#5823FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="rule-span">
                  $3000 = Overall Heaviest 10 of the Tournament&nbsp;50%/30%/20%
                  Split&nbsp;
                </span>
              </li>
              <li className="d-flex align-items-start mt-4">
                <div className="checkmark-circle me-2 mt-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="url(#paint0_linear_47_3299)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_3299"
                        x1="15.9999"
                        y1="31.0538"
                        x2="15.9999"
                        y2="1.48336e-09"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B7FE" />
                        <stop offset="1" stop-color="#5823FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="rule-span">
                  $3000 = Daily Heaviest Fish WTA Heaviest Fish of Each Day
                  Winner Take All&nbsp;&nbsp;
                </span>
              </li>
            </div>
            <div>
              <li className="d-flex align-items-start">
                <div className="checkmark-circle me-2 mt-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="url(#paint0_linear_47_3299)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_3299"
                        x1="15.9999"
                        y1="31.0538"
                        x2="15.9999"
                        y2="1.48336e-09"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B7FE" />
                        <stop offset="1" stop-color="#5823FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="rule-span">
                  $3000 = Daily Aggregate Top 5&nbsp;$1500/day for 1st &
                  2nd.&nbsp; 60%/40% split&nbsp;
                </span>
              </li>
              <li className="d-flex align-items-start mt-4">
                <div className="checkmark-circle me-2 mt-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="url(#paint0_linear_47_3299)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_3299"
                        x1="15.9999"
                        y1="31.0538"
                        x2="15.9999"
                        y2="1.48336e-09"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B7FE" />
                        <stop offset="1" stop-color="#5823FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="rule-span">
                  $3000 =Heaviest Fish Overall WTA&nbsp; Heaviest Fish of the
                  Tournament Winner Take All&nbsp;
                </span>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Rules;
