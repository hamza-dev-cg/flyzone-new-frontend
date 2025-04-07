import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Button from "../../../components/Button";
import TournamentPic from "../../../assets/images/tournament-pic.svg";
import TournamentsWrapper from "./style";

const tournamentsData = [
  {
    id: 1,
    title: "Chub Cay",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
    navigateTo: "/admin-dashboard/tournaments/tournaments-details",
  },
  {
    id: 2,
    title: "Chub Cay",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
    navigateTo: "/admin-dashboard/tournaments/tournaments-details",
  },
  {
    id: 3,
    title: "Chub Cay",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
    navigateTo: "",
  },
];

const TournamentCard = ({ title, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 col-md-6">
      <div className="tournament-box">
        <img src={TournamentPic} alt="no-tournament-pic" />
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          text="View Tournament"
          onClick={() => navigateTo && navigate(navigateTo)}
        />
      </div>
    </div>
  );
};

const Tournaments = () => {
  return (
    <TournamentsWrapper>
      <div className="d-flex justify-content-between mb-2">
        <h3>Tournament</h3>
        <Button startIcon={<FiPlus />} text="Add Tournaments" />
      </div>
      <span className="caption">See tournaments performance from here.</span>
      <div className="row">
        {tournamentsData.map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </div>
    </TournamentsWrapper>
  );
};

export default Tournaments;
