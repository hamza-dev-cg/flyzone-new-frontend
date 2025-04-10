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
                  ● Fees are non-refundable unless canceled by organizers except
                  in cases covered under Force Majeure.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>4.Force Majeure:</strong>
              </p>
              <ul>
                <li>
                  Organizers are not liable for delays or cancellation due to
                  uncontrollable events (e.g., natural disasters, pandemics,
                  etc.).
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>5.Tournament Dates and Duration:</strong>
              </p>
              <ul>
                <li>
                  ● Tournament will be held from 02nd May 2025 to 04th May 2025.
                </li>
                <li>
                  ● Fishing will begin (line drop) at 05:00 hours on 02nd May
                  2025 and end at 18:00 hours on 04th May 2025
                </li>
                <li>
                  ● Fishing outside of these hours is strictly prohibited.
                </li>
              </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>6.Fishing Zones:</strong>
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
                <strong>7.Equipment:</strong>
              </p>
              <ul>
                <li> ● Only sport fishing gear is allowed.</li>
                <li> ● Nets, traps, and illegal gear are prohibited.</li>
                <li>
                  ● Motorized boats are allowed, but participants must comply
                  with local marine regulations.
                </li>
              </ul>
            </div>

            <div className="rule-description">
              <p>
                <strong>8.Target Species and Scoring:</strong>
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
                <strong>9. Catch and Release:</strong>
              </p>
              <ul>
                <li>
                  ● Participants are encouraged to practice catch and release to
                  support marine conservation.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>10.Tournament Conduct:</strong>
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
                <strong>11. Safety:</strong>
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
                  ● Participants are responsible for their own safety and that
                  of their crew members.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>12. Prizes and Awards:</strong>
              </p>
              <ul>
                <li>
                  ● A cash prize of USD 25,000.00 or equivalent to MVR will be
                  awarded to the top team based on the total score.
                </li>
                <li> ● Additional prizes will be awarded (individual award)</li>
                <li>
                  ● Winners will be announced during the award ceremony on 6th
                  May 2025.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>13. Disqualification:</strong>
              </p>
              <ul>
                <li>
                  ● Violations of tournament rules, including dishonest
                  reporting, use of illegal equipment, or unsportsmanlike
                  conduct, may lead to disqualification. The tournament
                  organizers reserve the right to disqualify participants at
                  their sole discretion.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>14.Liability:</strong>
              </p>
              <ul>
                <li>
                  ● Participants are responsible for their own health and
                  safety.
                </li>
                <li>
                  ● Organizers are not liable for injuries, loss, or accidents.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>15. Changes to the Rules:</strong>
              </p>
              <ul>
                <li>
                  ● The organizers reserve the right to make changes to the
                  tournament rules and regulations.
                </li>
                <li>
                  ● Any amendments will be communicated to participants in
                  advance via website and email.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>16. Environmental Considerations:</strong>
              </p>
              <ul>
                <li>
                  ● Participants must adhere to all environmental guidelines set
                  by local authorities.
                </li>
                <li>
                  ● Littering, pollution, or damage to marine habitats will not
                  be tolerated.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>17. Event Schedule:</strong>
              </p>
              <ul>
                <li>
                  ● A detailed event schedule, including briefing sessions,
                  rules meetings, and the award ceremony, will be provided
                  before the tournament begins.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>18. Technical Terms and Conditions:</strong>
              </p>
              <ul>
                <li>
                  ● Participants must ensure compliance with all tournament
                  guidelines and local laws.
                </li>
                <li>
                  ● Disputes regarding scoring or any tournament decision will
                  be addressed by the tournament committee, whose decision shall
                  be final.
                </li>
                <li>
                  ● The tournament officials have the authority to enforce
                  rules, adjust schedules, and manage unforeseen circumstances
                  in the best interest of the event
                </li>
              </ul>
            </div>
            <div className="rule-description mt-4">
              <p>
                <strong>19.EQUIPMENT REGULATIONS</strong>
              </p>
              <p>
                <strong>19.1 LINE AND BACKING</strong>
              </p>
              <ul>
                <li>
                  ● Monofilament, multifilament, and lead core multifilament
                  lines can be used.
                </li>
                <li>● Wire lines are prohibited.</li>
                <li>● Backing is permitted.</li>
                <li>
                  ● The catch shall be classified under the breaking strength of
                  the first 5 meters (16.5 feet) of line directly preceding the
                  double line, leader, or hook. This section must be comprised
                  of a single, homogenous piece of line and may not exceed
                  60-kilogram (130 pound) line class.
                </li>
              </ul>
              <p>
                <strong>19.2 DOUBLE LINE</strong>
              </p>
              <ul>
                <li>
                  ● A double line must consist of the actual line used to catch
                  the fish.
                </li>
                <li>
                  ● Double lines are measured from the start of the knot, braid,
                  roll or splice making the double line to the farthermost end
                  of the knot, splice, snap, swivel or other device used for
                  securing the trace, leader, lure or hook to the double line.
                </li>
                <li>
                  ● The double line shall be limited to 4.57 meters (15 feet).
                  The combined length of the double line and leader shall not
                  exceed 6.1 meters (20 feet)
                </li>
              </ul>
              <p>
                <strong>19.3 LEADER</strong>
              </p>
              <ul>
                <li>
                  ● The length of the leader is the overall length including any
                  lure, hook arrangement or other device, and is measured to the
                  bend of the last hook. The leader must be connected to the
                  line with a snap, knot, splice, swivel or other device.
                  Holding devices are prohibited.
                </li>
                <li>
                  ● The leader shall be limited to 4.57 meters (15 feet). The
                  combined length of the double line and leader shall not exceed
                  6.1 meters (20 feet).
                </li>
              </ul>
              <p>
                <strong>19.4 ROD</strong>
              </p>
              <ul>
                <li>
                  ● Rods must comply with sporting ethics and customs.
                  Considerable latitude is allowed in the choice of a rod, but
                  rods giving the angler an unfair advantage will be
                  disqualified. This rule is intended to eliminate the use of
                  unconventional rods
                </li>
                <li>
                  ● The rod tip must be a minimum of 101.6 centimeters (40
                  inches) in length. The rod but cannot exceed 68.58 centimeters
                  (27 inches) in length. These measurements must be made from a
                  point directly beneath the center of the reel. A curved but is
                  measured in a straight line. When the rod but is placed in a
                  gimbal, the measurement from the center of the reel seat to
                  the pivot point of the gimbal can be no more than 68.58
                  centimeters (27 inches). (The above measurements do not apply
                  to surfcasting rods.)
                </li>
              </ul>
              <p>
                <strong>19.5 REEL</strong>
              </p>
              <ul>
                <li>
                  ● Power- driven reels are acceptable under the following
                  situation and configuration. a. Reels that have power
                  accessories (e.g., electric drill attachments, motors, or
                  other power accessories specifically designed for a reel) that
                  can be physically removed from the reel may be used strictly
                  for the purpose of retrieving a deployed bait or lure at depth
                  all the way to the boat. b. Power accessories may only be used
                  to retrieve a bait or lure completely to the boat and are not
                  permitted for adjusting the position of a bait or lure in the
                  water column. Once a power accessory is attached to the reel,
                  the bait or lure may no longer be legally used to catch a fish
                  and the bait or lure must be retrieved all the way to the boat
                  for manual redeployment before it may be legally used to hook
                  or catch a fish. Power accessories may not be attached to the
                  reel during the deployment of a bait or lure. c. Power
                  accessories must be physically removed from the reel before
                  the act of or hooking or fighting a fish. Any fish that
                  strikes a bait or lure being fished with a reel with power
                  accessories still attached- whether or not under electric
                  operation- will not be eligible for record consideration. d.
                  Electric reels that do not have removable electronic
                  components that allow them to be completely manually driven
                  are prohibited
                </li>
                <li>● Ratchet handle reels are prohibited</li>
                <li>
                  ● Reels designed to be cranked with both hands at the same
                  time is prohibited
                </li>
              </ul>
              <p>
                <strong>19.6 HOOKS AND LURES</strong>
              </p>
              <ul>
                <li>
                  ● When using an artificial lure with a skirt or trailing
                  material, no more than two single hooks may be attached to the
                  line, leader, or trace. The hooks need not be attached
                  separately. The eyes of the hooks must be no less than an
                  overall hook's length (the overall length of the largest hook
                  used) apart and no more than 30.48 centimeters (12 inches)
                  apart. The only exception is that the point of one hook may be
                  passed through the eye of the other hook. The trailing hook
                  may not extend more than a hook's length beyond the skirt of
                  the lure. A hook may not precede bait, lure or bait/lure combo
                  by more than one hook’s length. A photograph or sketch showing
                  the hook arrangement must accompany a record application.
                </li>
                <li>
                  ● Gang hooks are permitted when attached to plugs and other
                  artificial lures that are specifically designed for this use.
                  Gang hooks must be free swinging and shall be limited to a
                  maximum of three hooks (single, double, or treble, or a
                  combination of any three). It is permissible to imbed or
                  securely attach a gang hook to a lure provided that the hook
                  becomes free swinging once the fish takes the lure. Gang hooks
                  may not be used with live or dead baits. A photograph or
                  sketch of the plug or lure should be submitted with record
                  applications.
                </li>
                <li>
                  ● Only one lure containing hooks may be used on a single line
                </li>
              </ul>
              <p>
                <strong>19.7 OTHER EQUIPMENT</strong>
              </p>
              <ul>
                <li>
                  ● Fighting chairs may not have any mechanically propelled
                  devices that aid the angler in fighting a fish.
                </li>
                <li>
                  ● Gimbals must be free swinging, which includes gimbals that
                  swing in a vertical plane only. Any gimbal that allows the
                  angler to reduce strain or to rest while fighting the fish is
                  prohibited.
                </li>
                <li>
                  ● Gaffs (including flying gaffs), tail snares and nets used to
                  boat or land a fish must not exceed 2.44 meters (8 feet) in
                  overall length. In the case of tail snares, overall length is
                  defined as the distance from the beginning of the handle to
                  the apex of the snare when loaded. In using a flying or
                  detachable gaff, the rope may not exceed 9.14 meters (30
                  feet). The gaff rope must be measured from the point where it
                  is secured to the detachable head to the other end. Only the
                  effective length will be considered. If a fixed head gaff is
                  used, the same limitations shall apply and the gaff rope shall
                  be measured from the same location on the gaff hook. Only a
                  single hook is permitted on any gaff.
                </li>
                <li>● Harpoons or lances are prohibited.</li>
                <li>
                  ● Tail ropes are limited to 9.14 meters (30 feet). When
                  fishing from a bridge, pier, or other high plaorm or
                  structure, this length limitation does not apply.
                </li>
                <li>
                  ● Entangling devices, either with or without a hook, are
                  prohibited and may not be used for any purpose including
                  baiting, hooking, fighting, or landing the fish.
                </li>
                <li>
                  ● Outriggers, downriggers, spreader bars and kites are
                  permitted to be used provided that the actual fishing line is
                  attached to the snap or other release device, either directly
                  or with some other material. The leader or double line may not
                  be connected to the release mechanism either directly or with
                  the use of a connecting device. Spreader bars are also
                  acceptable when used strictly as a tease
                </li>
                <li>
                  ● Daisy chains, birds, floats and similar devices are
                  prohibited. (teasers not included).
                </li>
                <li>
                  ● A safety line may be attached to the rod, reel or harness
                  provided that it does not in any way assist the angler in
                  fighting the fish.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>20.ANGLING REGULATION</strong>
              </p>
              <ul>
                <li>
                  ● From the time that a fish strikes or takes a bait or lure,
                  the angler must hook, fight, and land or boat the fish without
                  the aid of any other person, except as provided in these
                  regulations.
                </li>
                <li>
                  ● If a rod holder is used, once the fish is hooked, the angler
                  must remove the rod from the rod holder as quickly as
                  possible.
                </li>
                <li>
                  ● If a double line is used, the intent of the regulations is
                  that the fish will be fought on the single line most of the
                  time that it takes to land the fish.
                </li>
                <li>● Use of a rod belt or waist gimbal is permitted.</li>
                <li>
                  ● When angling from a boat, once the leader is brought within
                  the grasp of the mate, or the end of the leader is wound to
                  the rod tip, more than one person is permitted to hold the
                  leader.
                </li>
                <li>
                  ● One or more gaffers may be used in addition to persons
                  holding the leader. The gaff handle must be in hand when the
                  fish is gaffed.
                </li>
                <li>
                  ● The angling and equipment regulations shall apply until the
                  fish is weighed.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>21. DISQUALIFICATION ACT</strong>
              </p>
              <ul>
                <li>
                  ● Failure to comply with equipment or angling regulations.
                </li>
                <li>
                  ● The act of persons other than the angler in touching any
                  part of the rod, reel, or line (including the double line)
                  either bodily or with any device, from the time a fish strikes
                  or takes the bait or lure, until the fish is either landed or
                  released, or in giving any aid other than that allowed in the
                  rules and regulations. If an obstacle to the passage of the
                  line through the rod guides has to be removed from the line,
                  then the obstacle (whether chum, rubber band, or other
                  material) shall be held and cut free. Under no circumstances
                  should the line be held or touched by anyone other than the
                  angler during this process.
                </li>
                <li>
                  ● Resting the rod in a rod holder, on the gunwale of the boat,
                  or any other object while playing the fish.
                </li>
                <li>
                  ● Handlining or using a handline or rope attached in any
                  manner to the angler's line or leader for the purpose of
                  holding or lifting the fish.
                </li>
                <li>
                  ● Shooting, harpooning, or lancing any fish (including sharks
                  and halibuts) at any stage of the catch. (Chumming with or
                  using as bait)
                </li>
                <li>
                  ● Using a boat or device to beach or drive a fish into shallow
                  water in order to deprive the fish of its normal ability to
                  swim.
                </li>
                <li>
                  ● Changing the rod or reel while the fish is being played.
                </li>
                <li>
                  ● Splicing, removing, or adding to the line while the fish is
                  being played.
                </li>
                <li>● Intentionally foul hooking a fish.</li>
                <li>
                  ● Catching a fish in a manner that the double line never
                  leaves the rod tip.
                </li>
                <li>
                  ● If a fish escapes before gaffing or netting and is
                  recaptured by any method other than as outlined in the angling
                  rules.
                </li>
                <li>
                  ● Holding or touching an angler in a manner that assists them
                  in fighting the fish or takes pressure off of the angler.
                  Touching or briefly holding the angler to prevent them from
                  falling does not constitute a disqualification.
                </li>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>22. RELEASING GUIDELINE</strong>
              </p>
              <ul>
                <li>● A catch is considered officially released when:</li>
                <li>
                  a) The swivel between the main line or double line hits the
                  rod tip
                </li>
                <li>b) The mate grabs the leader or</li>
                <li>c) The wind-on leader goes through the rod tip.</li>
                <li>
                  ● If a gaff breaks the horizontal plane of the cockpit
                  covering boards or if the catch is removed from the water, the
                  team has committed to a capture and the catch will not earn
                  release points, even if it is subsequently released. To
                  qualify as a release, the specimen must remain in the water.
                </li>
                <li>
                  ● All catches released in the tournament must be verified by
                  video footage that clearly shows the angler, species, and
                  release. Each team is responsible for providing their own
                  video device and the appropriate video memory cards to record
                  video footage that documents the releases on their boat. Video
                  footage may be recorded on mobile phones or tablets. Each team
                  is required to initialize their video device by showing the
                  date and time on their GPS prior to lines in for each day of
                  fishing. Color-coded cards will be provided for each team and
                  must be displayed during the video of each billfish release.
                  The color-coded card will be designated for each fishing day
                  the night before.
                </li>
                <li>● Video documentation must clearly show the following:</li>
                <ul>
                  <li>
                    a) The angler fighting the fish – Clear video evidence
                    showing the angler fighting the fish.
                  </li>
                  <li>
                    b) Species verification – Clear video evidence clearly
                    showing the fish for identification purposes.
                  </li>
                  <li>
                    c) Release verification – Clear video evidence showing on
                    release as listed in the Catch & Release section of the
                    tournament rules.
                  </li>
                  <li>
                    d) Day confirmation – Clear video evidence of the
                    color-coded card for that day of fishing.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="rule-description">
              <p>
                <strong>23. RELEASING GUIDELINE</strong>
              </p>
              <ul>
                <li>● A catch is considered officially released when:</li>
              </ul>
            </div>
            <div className="rule-description mt-4">
              <p>
                <strong>24. Scoring System:</strong>
              </p>
              <ul>
                <li>
                  ● Points are awarded for both caught and released fish,
                  encouraging catch and release.
                </li>
                <li>
                  ● Catches must be documented via video evidence, including
                  provided colored markers for verification.
                </li>
                <li>
                  ● Measurement tapes/devices will be provided by the tournament
                  organizers.
                </li>
                <li>
                  ● Only fish caught within the designated tournament area and
                  during tournament hours are eligible for scoring.
                </li>
              </ul>

              <div
                className="table-responsive mt-3 text-center"
                style={{ backgroundColor: "#f7f9fb" }}
              >
                <table className="table">
                  <thead className="bg-danger">
                    <tr>
                      <th>Species</th>
                      <th>Catch Limit</th>
                      <th>Score Factor</th>
                      <th>Release Point</th>
                      <th>Keep Limit</th>
                      <th>Size Limit</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blue/Black Marlin</td>
                      <td>No Limit</td>
                      <td>1200</td>
                      <td>250 points</td>
                      <td>2</td>
                      <td>N/A</td>
                      <td>
                        Video evidence is mandatory, including colored markers.
                      </td>
                    </tr>
                    <tr>
                      <td>Swordfish</td>
                      <td>No Limit</td>
                      <td>1200</td>
                      <td>300 points</td>
                      <td>1</td>
                      <td>N/A</td>
                      <td>
                        Video evidence is mandatory, including colored markers.
                      </td>
                    </tr>
                    <tr>
                      <td>Sail Fish</td>
                      <td>3</td>
                      <td>350</td>
                      <td>0</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>
                        Video evidence is mandatory, including colored markers.
                      </td>
                    </tr>
                    <tr>
                      <td>Bigeye Tuna</td>
                      <td>5</td>
                      <td>180</td>
                      <td>0</td>
                      <td>N/A</td>
                      <td>&gt; 1.2m (4ft)</td>
                      <td>
                        Video evidence is mandatory, including colored markers.
                      </td>
                    </tr>
                    <tr>
                      <td>Yellowfin Tuna</td>
                      <td>5</td>
                      <td>150</td>
                      <td>0</td>
                      <td>N/A</td>
                      <td>&gt; 1.2m (4ft)</td>
                      <td>
                        Video evidence is mandatory, including colored markers
                        and measurement.
                      </td>
                    </tr>
                    <tr>
                      <td>Mahi-Mahi</td>
                      <td>3</td>
                      <td>250</td>
                      <td>0</td>
                      <td>N/A</td>
                      <td>&gt; 1.2m (4ft)</td>
                      <td>
                        Video evidence is mandatory, including colored markers
                        and measurement.
                      </td>
                    </tr>
                    <tr>
                      <td>Wahoo</td>
                      <td>3</td>
                      <td>150</td>
                      <td>0</td>
                      <td>N/A</td>
                      <td>&gt; 1.2m (4ft)</td>
                      <td>
                        Video evidence is mandatory, including colored markers
                        and measurement.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rule-description">
              <p>
                <strong>25.Proper Conduct:</strong>
              </p>
              <ul>
                <li>
                  ● <strong>Adherence to Rules:</strong>All participants must
                  adhere to all tournament rules and regulations
                </li>
                <li>
                  ● <strong>Sportsmanship:</strong> Maintain the highest
                  standards of sportsmanship and ethical fishing practices.
                  Respect fellow anglers and tournament officials.
                </li>
                <li>
                  ● <strong>Conservation:</strong>Practice catch and release
                  whenever possible, especially for billfish and species with
                  release points. Handle all fish with care to maximize survival
                  chances.
                </li>
                <li>
                  ● <strong>Video Evidence:</strong>All catches must be
                  documented via video, clearly showing the fish, the provided
                  colored marker (at the beginning of the video), and the
                  measurement (where applicable). Ensure the video is of
                  sufficient quality for verification.
                </li>
                <li>
                  ● <strong>Proper Handling:</strong>Handle fish with care,
                  minimizing air exposure and using wet hands or gloves. Use
                  appropriate de-hooking tools.
                </li>
                <li>
                  ● <strong>Measurement:</strong>Accurate measurement is
                  crucial. Use the provided measuring devices and ensure they
                  are clearly visible in the video. For length measurements,
                  measure from the tip of the snout to the fork of the tail.
                </li>
                <li>
                  ● <strong>Catch and Release Procedures:</strong>Employ best
                  practices for catch and release: use appropriate tackle,
                  minimize fight time, and revive fish at the side of the boat
                  before release.
                </li>
                <li>
                  ● <strong>Environmental Awareness:</strong> Be mindful of the
                  marine environment. Do not litter or pollute. Respect
                  protected areas and marine life.
                </li>
                <li>
                  ● <strong>Safety:</strong> Prioritize safety. Wear appropriate
                  gear and follow safe boating practices.
                </li>
                <li>
                  ● <strong> Reporting:</strong>
                  Report all catches and releases to tournament officials
                  promptly and accurately, submitting the video evidence.
                </li>
                <li>
                  ● <strong> Disputes:</strong>
                  Any disputes will be resolved by the tournament committee,
                  whose decision is final.
                </li>
                <li>
                  ● <strong>Keep/Size Limits:</strong>
                  Adhere strictly to keep and size limits. Fish outside these
                  limits will not be scored.
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
