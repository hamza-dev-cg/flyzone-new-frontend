import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import {
  useCreateTournamentCategoryForAdminMutation,
  useDeleteTournamentCategoryForAdminMutation,
} from "../../../../features/tournaments/api";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import Button from "../../../../components/Button";
import TournamentPic from "../../../../assets/images/cub-cay-open.svg";
import TournamentsWrapper from "../style";

const TournamentsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deleteTournament, setDeleteTournament] = useState("");
  const [GetTournamentCategory, { isLoading: isFetching }] =
    useCreateTournamentCategoryForAdminMutation();
  const [DeleteTournamentCategory] =
    useDeleteTournamentCategoryForAdminMutation();
  const [showTournamentCategory, setShowTournamentCategory] = useState([]);
  const pathSegments = location.pathname.split("/");
  const tournamentId = pathSegments[4];

  const getTournamentCategoryRecord = async () => {
    try {
      const response = await GetTournamentCategory(tournamentId);
      if (response) {
        setShowTournamentCategory(response.data);
      } else {
        toast.error("Failed to fetch tournaments.");
      }
    } catch (err) {
      toast.error("Something went wrong while fetching data.");
    }
  };
  useEffect(() => {
    getTournamentCategoryRecord(tournamentId);
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await DeleteTournamentCategory(id);
      if (response?.data) {
        toast.success("TournamentCategory Delete Successfully");
        getTournamentCategoryRecord(tournamentId);
      } else {
        toast.error("Failed to add tournament");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const TournamentCard = ({ name, description, id }) => (
    <div className="col-lg-4 col-md-6">
      <div className="tournament-box">
        <img src={TournamentPic} alt="no-tournament-pic" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="d-flex gap-3">
          <Button text="View Tournament" />
          <div className="trash-icon" onClick={handleDelete}>
            <IoTrashOutline />
          </div>
        </div>
      </div>
    </div>
  );
  const Loader = () => (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <TournamentsWrapper>
        <div className="d-flex justify-content-between mb-2">
          <span className="d-flex gap-2 align-items-center">
            <IoMdArrowBack
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />{" "}
            <h3 className="mb-0">Chub Cay Tournament</h3>
          </span>
          <Button
            startIcon={<FiPlus />}
            onClick={() =>
              navigate(
                "/admin-dashboard/tournaments/tournaments-details/add-event"
              )
            }
            text="Add Events"
          />
        </div>

        <span className="caption">
          See tournament event’s information from here.
        </span>
        <div className="row">
          {isFetching ? (
            <Loader />
          ) : showTournamentCategory && showTournamentCategory.length > 0 ? (
            showTournamentCategory.map((tournament) => (
              <TournamentCard key={tournament.id} {...tournament} />
            ))
          ) : (
            <div className="col-12 text-center text-muted mt-4 fw-bold">
              No Data Found
            </div>
          )}
        </div>
      </TournamentsWrapper>
    </>
  );
};

export default TournamentsDetails;
