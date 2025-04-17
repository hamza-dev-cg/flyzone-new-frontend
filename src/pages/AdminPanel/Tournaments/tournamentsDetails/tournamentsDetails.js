import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Modal from "../../../../components/Modal";
import {
  useGetAllTournamentEventMutation,
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
  const [deleteTournamentEventId, setDeleteTournamentEventId] = useState("");
  const [deleteTournamentEvent, setDeleteTournamentEvent] = useState(false);
  const [GetTournamentCategory, { isLoading: isFetching }] =
  useGetAllTournamentEventMutation();
  const [DeleteTournamentCategory] =
    useDeleteTournamentCategoryForAdminMutation();
  const [showTournamentCategory, setShowTournamentCategory] = useState([]);
  const pathSegments = location.pathname.split("/");
  const tournamentId = pathSegments[4];

  const getTournamentCategoryRecord = async () => {
    try {
      const response = await GetTournamentCategory(tournamentId);
      if (response) {
        console.log(response, "response");
        setShowTournamentCategory(response.data.events);
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

  const handleDelete = async () => {
    try {
      const response = await DeleteTournamentCategory(deleteTournamentEventId);
      if (response?.data) {
        toast.success("TournamentCategory Delete Successfully");
        getTournamentCategoryRecord(tournamentId);
        setDeleteTournamentEvent(false);
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
          <div
            className="trash-icon"
            onClick={() => {
              setDeleteTournamentEvent(true);
              setDeleteTournamentEventId(id);
            }}
          >
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
                `/admin-dashboard/tournaments/tournaments-details/add-event/${tournamentId}`
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
              <TournamentCard
                key={tournament.id}
                id={tournament.id}
                {...tournament}
              />
            ))
          ) : (
            <div className="col-12 text-center text-muted mt-4 fw-bold">
              No Data Found
            </div>
          )}
        </div>
        <Modal
          show={deleteTournamentEvent}
          centered
          size="150px"
          header
          headerTitle="Delete Tournament"
        >
          <h6 className="text-center">
            Are you sure you want to delete this tournament?
          </h6>
          <div className="d-flex justify-content-end gap-4 mt-4">
            <Button
              className="outlined"
              text="Yes"
              width="100%"
              onClick={handleDelete}
            />
            <Button
              text="Cancel"
              width="100%"
              onClick={() => setDeleteTournament(false)}
            />
          </div>
        </Modal>
      </TournamentsWrapper>
    </>
  );
};

export default TournamentsDetails;
