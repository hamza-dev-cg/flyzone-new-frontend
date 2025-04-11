import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const Rules = () => {
  return (
    <div>
      <section className="rules-section">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="chubClayInvitational" />
        <div className="container mt-5 events-para">
          <h1 className="title">Chub Cay Invitational Rules</h1>
          <div className="d-flex justify-content-center my-3">
            <img src={Line} alt="line" className="responsive-line" />
          </div>
          <div className="rules-s-container">
            <div className="rule-description">
              <p className="rule-title">
                Reservation must be made to secure slip for tournament
                participation. Please contact rlaing@chubcay.com to reserve your
                slip. Due to limited availability, each tournament boat is
                currently permitted to rent 1 accommodation, whether it be 1
                Villa, 1 Beach Cabana or 1 Hotel Room. Once all participants are
                offered accommodations, we will release the remaining units on a
                first paid first serve basis.
              </p>
              <p>1. All teams must possess a Bahamas Fishing Permit.</p>
            </div>
            <div className="rule-description">
              <p>
                2. An unlimited number of teasers and lines are allowed.
                “J-hooks” are allowed with lures only. Off-set circle hooks are
                restricted from the tournament.
              </p>
            </div>
            <div className="rule-description">
              <p>3. Chumming is prohibited.</p>
            </div>
            <div className="rule-description">
              <p>
                4. The Tournament will begin with the call of "lines in" at
                8:00AM until 3:00PM on March 10th and 11th and April 14th and
                15th. No baits or teasers in the water before starting time. All
                boats must be inside the marina before 5:00PM each evening. Any
                gamefish requiring a weigh-in must available at the scales prior
                to 5:30PM. There are no lay days or weather days, unless
                determined by the Committee. Fish at your own risk.
              </p>
            </div>
            <div className="rule-description">
              <p>
                5. There is a 60-mile boundary rule - radius from the marina.
              </p>
            </div>
            <div className="rule-description">
              <p>
                6. Blue Marlin, White Marlin, and Sailfish are eligible for
                catch and release only. Tuna (Yellowfin or Blackfin only),
                Wahoo, and Dolphin (Mahi-Mahi) are eligible for weigh-in, with a
                10 lb. minimum weight requirement.
              </p>
            </div>
            <div className="rule-description">
              <p>
                7. A billfish hook-up must be called in to the "Committee Boat"
                within the first minute on VHF channel 71. The "Committee Boat"
                will validate your hook-up by announcement. A billfish release
                must be called in to the "Committee Boat" with the following
                information: species released and boat name. The "Committee
                Boat" will then verify your information by announcement and give
                you a release time, which must be recorded on your daily sheet.
              </p>
            </div>
            <div className="rule-description">
              <p>
                8. Teams may weigh in one of each species per day. Scale hours
                are 3:00p.m. – 5:00p.m. each fishing day. The minimum weight of
                each species is 10 pounds. Any fish eligible for weigh-in must
                be brought to the scales by a team representative, preferably
                the actual angler.
              </p>
            </div>
            <div className="rule-description">
              <p>
                9. All billfish must be released to qualify. A billfish is
                considered released when an angler brings the leader close
                enough to the boat for the mate or captain to grasp the leader
                or leader passes through tip.
              </p>
            </div>
            <div className="rule-description">
              <p style={{ fontWeight: "500" }}>
                Billfish trophies will be awarded for first, second and third
                place based on the total points achieved per the scoring below.
                Name of first place boat will be added to Club Perpetual Trophy.
              </p>
            </div>
            <div className="rule-description">
              <p>
                <span className="rule-title">
                  CATCH & RELEASE POINTS: <br></br>Sailfish 100 points
                  (including unidentified billfish and Spearfish*) White Marlin
                  200 points <br></br>
                  Blue Marlin 500 points
                </span>
              </p>
            </div>
            <div className="rule-description">
              <p>
                10. The Chub Cay Club has a rich heritage for being a gentleman
                and lady’s tournament that is conducted and scored based on the
                honor system, however, in case of a protest, forms are available
                and must be filled out on the same day of infraction of the
                rules observed, plus a non-refundable $1000 protest fee. The
                decision of the Fishing Committee regarding the protest and the
                interpretation of the rules shall be final.
              </p>
            </div>
            <div className="rule-description">
              <p>
                11. In the event of a tie in total points between two or more
                boats for the same award, the winner shall be the first boat to
                reach the score.
              </p>
            </div>
            <div className="rule-description">
              <p>
                12. Any angler who has worked as a professional crew member,
                Captain, mate or commercial fisherman in the previous 3 years
                will not be allowed to participate as an angler. Hook and hand
                is permitted with one pass as soon as possible, then IGFA rules
                apply.
              </p>
            </div>
            <div className="rule-description">
              <p>
                13. Participants of this tournament enter at their own risk.
                Officials, committee members, sponsors and ALL persons connected
                directly or indirectly with the operations of the Chub Cay Club
                Members & Guest Fishing Tournament shall be exempt from any
                liability for loss, damage or negligence, harm or injury
                suffered by any participant, entrant, sportfishing vessel,
                captain, crew members, vessels and equipment which may occur
                during this tournament.
              </p>
            </div>
            <div className="rule-description">
              <p>
                14. By signing the entry you adhere to all tournament rules.
              </p>
            </div>
            <div className="rule-description">
              <p>
                15. Chub Cay Resort & Marina has right to move tournament dates
                in case of severe weather and can refuse entry/participation to
                anyone for any reason at any time.
              </p>
            </div>
            <div className="rule-description">
              <p>
                <span className="rule-title">CATCH & RELEASE VERIFICATION</span>
              </p>
            </div>
            <div className="rule-description">
              <p>
                <span style={{ fontWeight: "600", color: "black" }}>
                  IDENTIFICATION MARKERS:
                </span>
                <br></br>
                Each team will obtain a marker prior to the day’s fishing. This
                marker must be displayed during the fight and recorded. Failure
                to show the marker in your video proof will disqualify your
                catch, even if it is time-stamped.
              </p>
            </div>{" "}
            <div className="rule-description">
              <p>
                <span style={{ fontWeight: "600", color: "black" }}>
                  RELEASE VERIFICATION RECORDINGS:
                </span>
                <br></br>
                Each team is required to show video evidence of billfish catch
                and release. This recording shall be time and date stamped in
                accordance with the “official time” as stated by the “Committee
                Boat” prior to each day’s fishing. Your video proof shall
                include: 1) registered angler fighting the fish, 2) proper
                identification marker, 3) sufficient footage of the fish in
                order to accurately determine the species, and 4) proper release
                evidence . All recordings submitted must be easily viewed by the
                committee. It is the team’s responsibility to have these items
                and the video cued up for immediate viewing. Failure to do so
                will delay the verification process. We highly recommend you
                have at least two recordings on different cameras, and
                underwater shots are the best way to accurately identify the
                species.
              </p>
            </div>{" "}
            <div className="rule-description">
              <p>
                <span style={{ fontWeight: "600", color: "black" }}>
                  RELEASE AFFIDAVIT:
                </span>
                <br></br>
                Each billfish release is required to be noted on the day’s
                affidavit and submitted with your video to the committee each
                fishing day. Failure to turn in your affidavit will disqualify
                that day’s catch(es). Affidavits are supplied with your
                registration package. If you do not have one for each day,
                please see the committee for a replacement.
              </p>
            </div>{" "}
            <div className="rule-description">
              <p>
                <span style={{ fontWeight: "600", color: "black" }}>
                  SUBMISSION OF RECORDINGS:
                </span>
                <br></br>
                Verification recordings must be submitted to the Committee by
                5PM each day of fishing. All recordings, images, sounds, etc.
                may become property of Chub Cay Resort & Marina Club and/or Fly
                Zone Fishing and may be used at any time. Recordings and/or
                images will be downloaded from the team’s device(s), if needed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
