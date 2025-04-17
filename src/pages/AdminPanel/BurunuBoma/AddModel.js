import React from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { convertToFormData } from "../../../utils/helpers";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useCreateTournamentMutation } from "../../../features/tournaments/api";
import { getValidationSchema } from "../../../utils/validationSchema";
import { setTournament } from "../../../features/tournaments/tournamentSlice";
import Modal from '../../../components/Modal';
import LineSvg from "../../../assets/line.svg";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/css/login.css";

const AddModal = ({ show, onClose, refreshData }) => {
  const schema = getValidationSchema("tournament");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [createTournament, { isLoading }] = useCreateTournamentMutation();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const formData = convertToFormData(data);
      const response = await createTournament(formData).unwrap();
      if (response?.success && response?.data) {
        dispatch(setTournament({ tournament: response.data }));
        toast.success(response?.messages[0]);
        refreshData(); 
        onClose();
      } else {
        toast.error(response?.messages?.[0]);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };
  if (!show) return null;
  return (
    <Modal centered show>
        <div className="p-5" >
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <h4 className="textHeading">Registration Form</h4>
          <div className="line">
            <img src={LineSvg} alt="Line Decoration" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" mb-3">
              <label>Tournament</label>
              <select className="form-select custom-select" {...register("tournament_category")}>
                <option value="Chub Cay Classic">
                  Chub Cay Classic
                </option>
                <option value="Chub Cay Open">
                  Chub Cay Open
                </option>
                <option value="Chub Cay Invitational">
                  Chub Cay Invitational
                </option>
              </select>
              {errors.tournament_category && <p className="error-text">{errors.tournament_category.message}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="teamName">Team Name</label>
                <input type="text" id="teamName" placeholder="Team Name" {...register("team_name")} />
                {errors.team_name && <p className="error-text">{errors.team_name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="xyz@gmail.com" {...register("email")} />
                {errors.email && <p className="error-text">{errors.email.message}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="captainName">Captain Name</label>
                <input type="text" id="captainName" placeholder="Captain Name" {...register("captain_name")} />
                {errors.captain_name && <p className="error-text">{errors.captain_name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="boatName">Boat Name</label>
                <input type="text" id="boatName" placeholder="Boat Name" {...register("boat_name")} />
                {errors.boat_name && <p className="error-text">{errors.boat_name.message}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="anglerName">Angler Name</label>
                <input type="text" id="anglerName" placeholder="Angler Name" {...register("angler_name")} />
                {errors.angler_name && <p className="error-text">{errors.angler_name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="noOfTeamMembers">No. of Team Members</label>
                <input type="number" id="noOfTeamMembers" placeholder="4" {...register("number_of_team_members")} />
                {errors.number_of_team_members && <p className="error-text">{errors.number_of_team_members.message}</p>}
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? <div className="loader"></div> : "Register"}
            </button>
          </form>
        </div>
    </Modal>

  );
};

export default AddModal;
