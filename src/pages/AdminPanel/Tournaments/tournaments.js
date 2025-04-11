import React, { useEffect, useState, useCallback } from "react";
import { AddEventWrapper } from "./AddEvent/style";
import { useForm } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../../assets/icons/upload-file-icon.svg";
import Input from "../../../components/Input";

import {
  useGetAllTournamentForAdminMutation,
  useCreateTournamentForAdminMutation,
  useDeleteTournamentForAdminMutation,
} from "../../../features/tournaments/api";
import { FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../../components/Button";
import TournamentPic from "../../../assets/images/tournament-pic.svg";
import TournamentsWrapper from "./style";

const Tournaments = () => {
  const [getTournamentAPI] = useGetAllTournamentForAdminMutation();
  const [createTournament] = useCreateTournamentForAdminMutation();
  const [deleteTournamentAPI] = useDeleteTournamentForAdminMutation();
  const [showTournament, setShowTournament] = useState([]);
  const [deleteTournament, setDeleteTournament] = useState(false);
  const [deleteTournamentId, setDeleteTournamentId] = useState("");
  const [addTournament, setAddTournament] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const TournamentCard = ({ name, description, navigateTo, id }) => (
    <div className="col-lg-4 col-md-6 d-flex">
      <span className="position-relative tournament-box">
        <div
          className="delete-icon position-absolute"
          onClick={() => {
            setDeleteTournament(true);
            setDeleteTournamentId(id);
          }}
        >
          <IoTrashOutline />
        </div>
        <div>
          <img src={TournamentPic} alt="tournament" />
          <h2>{name}</h2>
          <p>{description}</p>
          <Button text="View Tournament" onClick={() => navigate(navigateTo)} />
        </div>
      </span>
    </div>
  );

  const FileUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
      setUploadFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "application/pdf": [],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
        "image/*": [],
      },
      maxSize: 5 * 1024 * 1024,
    });

    return (
      <div className="upload-img">
        <div
          {...getRootProps()}
          className={`w-full h-40 flex flex-col items-center justify-center cursor-pointer ${
            isDragActive ? "bg-gray-100" : "bg-white"
          }`}
        >
          <input {...getInputProps()} />
          <div className="upload-box mt-4">
            <img src={UploadIcon} alt="upload-icon" />
            Drag and Drop Files here or{" "}
            <span className="choose-file">choose file</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="text-gray-500 text-sm">
            Files Supported: PDF, XLSX, Images
          </p>
          <p className="text-gray-500 text-sm">Maximum size: 5MB</p>
        </div>
      </div>
    );
  };

  const onSubmit = async (data) => {
    try {
      // const formData = new FormData();
      // formData.append("name", data.name);
      // formData.append("description", data.description);
      // if (uploadFile) {
      //   formData.append("file", uploadFile);
      // }

      const response = await createTournament(data);

      if (response?.data) {
        toast.success("Tournament Added Successfully");
        reset();
        setUploadFile(null);
        setAddTournament(false);
        fetchTournaments();
      } else {
        toast.error("Failed to add tournament");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const fetchTournaments = async () => {
    try {
      const response = await getTournamentAPI();
      if (response?.data?.tournaments) {
        setShowTournament(response.data.tournaments);
      } else {
        toast.error("Failed to fetch tournaments.");
      }
    } catch (err) {
      toast.error("Something went wrong while fetching tournaments.");
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const handleDeleteTournament = async () => {
    try {
      const response = await deleteTournamentAPI(deleteTournamentId);
      if (response?.data) {
        toast.success("Tournament deleted successfully.");
        setDeleteTournament(false);
        setDeleteTournamentId("");
        fetchTournaments();
      } else {
        toast.error("Failed to delete tournament.");
      }
    } catch (err) {
      toast.error("Something went wrong while deleting the tournament.");
    }
  };

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
          <h3>Tournaments</h3>
          <Button
            startIcon={<FiPlus />}
            onClick={() => setAddTournament(true)}
            text="Add Tournaments"
          />
        </div>
        <span className="caption">See tournaments performance from here.</span>

        <div className="row">
          {showTournament.length === 0 ? (
            <p>
              <Loader />
            </p>
          ) : (
            showTournament.map((tournament) => (
              <TournamentCard
                key={tournament?.id}
                name={tournament.name}
                id={tournament?.id}
                description={tournament.description}
                navigateTo={`/admin-dashboard/tournaments/tournaments-details/${tournament.id}`}
              />
            ))
          )}
        </div>
      </TournamentsWrapper>

      <Modal
        show={deleteTournament}
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
            onClick={handleDeleteTournament}
          />
          <Button
            text="Cancel"
            width="100%"
            onClick={() => setDeleteTournament(false)}
          />
        </div>
      </Modal>

      <Modal show={addTournament} header headerTitle="Add Tournament">
        <div className="Add-tournament-modal">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Title"
              placeholder="Add Title"
              marginBottom="16px"
              {...register("name", {
                required: "Title is required",
              })}
            />
            {errors.name && (
              <span className="text-danger text-left">
                {errors.name.message}
              </span>
            )}

            <Input
              label="Add description"
              as="textarea"
              marginBottom="16px"
              placeholder="Add description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-danger text-left">
                {errors.description.message}
              </span>
            )}

            <AddEventWrapper>
              <FileUpload />
            </AddEventWrapper>

            <div className="d-flex justify-content-end gap-4 my-3">
              <Button
                className="outlined"
                text="Cancel"
                width="150px"
                onClick={() => setAddTournament(false)}
              />
              <Button text="Add Tournament" type="submit" width="250px" />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Tournaments;
