import React from "react";
import { FiPlus } from "react-icons/fi";
import {useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import Button from "../../../../components/Button";
import TournamentPic from "../../../../assets/images/cub-cay-open.svg";
import TournamentsWrapper from "../style";

const tournamentData = [
  {
    id: 1,
    title: "Classic",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
  },
  {
    id: 2,
    title: "Classic",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
  },
  {
    id: 3,
    title: "Classic",
    description:
      "The Chub Cay Classic, presented by Fly Zone Fishing, and hosted by Chub Cay Marina and Resort, is the 4th annual tournament in a three-part fishing series from March 13 to March 15, 2025, in the Bahamas. This event brings together anglers from across the globe, promoting sport fishing, camaraderie, and conservation.",
  },
];

const TournamentCard = ({ title, description }) => (
  <div className="col-lg-4 col-md-6">
    <div className="tournament-box">
      <img src={TournamentPic} alt="no-tournament-pic" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="d-flex gap-3">
        <Button text="View Tournament" />
          <div className="trash-icon">
            <IoTrashOutline />
          </div>
      </div>
    </div>
  </div>
);

const TournamentsDetails = () => {
  const navigate = useNavigate();
  return (
    <TournamentsWrapper>
      <div className="d-flex justify-content-between mb-2">
        <span className="d-flex gap-2 align-items-center">
        <IoMdArrowBack className="cursor-pointer" onClick={()=>navigate(-1)} /> <h3 className="mb-0">Chub Cay Tournament</h3>
        </span>
        <Button startIcon={<FiPlus />}  onClick={()=>navigate("/admin-dashboard/tournaments/tournaments-details/add-event")} text="Add Events" />
      </div>

      <span className="caption">
        See tournament event’s information from here.
      </span>
      <div className="row">
        {tournamentData.map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </div>
    </TournamentsWrapper>
  );
};

export default TournamentsDetails;
