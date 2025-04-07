import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEditRegTournamentMutation } from "../../../features/tournaments/api";
import { getValidationSchema } from "../../../utils/validationSchema";
import { setTournamentData } from "../../../features/registerMeatFish/registerSlice";
import Modal from "../../../components/Modal";
import LineSvg from "../../../assets/line.svg";
import "react-toastify/dist/ReactToastify.css";
import "../../../assets/css/login.css";

const EditModal = ({ show, onClose, data, refreshData }) => {
  console.log(data,"data in edit modal")
    const dispatch = useDispatch();
    const schema = getValidationSchema("tournamentEdit");
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            boat_name: "",
            email: "",
            captain_name: "",
            name: "",
            phone: "",
            city: "",
            state: "",
            address: "",
            angler_name: "",
        }
    });

    const [updateTournament, { isLoading }] = useEditRegTournamentMutation();

    useEffect(() => {
        if (data?.user) {
            reset({
                boat_name: data.user.boat_name || "",
                email: data.user.email || "",
                captain_name: data.user.name || "",
                name: data.user.name || "",
                phone: data.user.phone || "",
                city: data.user.city || "",
                state: data.user.state || "",
                address: data.user.address || "",
                angler_name: data?.event_detail?.title || "",
            });
        }
    }, [data, reset]);

    const onSubmit = async (formData) => {
        try {
            const updatedData = { ...formData, id: data.id };
            const response = await updateTournament(updatedData).unwrap();

            if (response?.success && response?.data) {
                dispatch(setTournamentData({ tournament: response.data }));
                toast.success("Tournament updated successfully!");
                refreshData();
                reset(); 
                onClose();
            } else {
                toast.error(response?.messages?.[0] || "Update failed.");
            }
        } catch (error) {
            toast.error("An error occurred while updating.");
            console.error("Update error:", error);
        }
    };

    const onError = (formErrors) => {
        console.log("Validation Errors:", formErrors);
        toast.error("Please fix form validation errors.");
    };

    if (!show) return null;

    return (
        <Modal centered show>
            <div className="p-5">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h4 className="textHeading">Registration Form</h4>
                <div className="line">
                    <img src={LineSvg} alt="Line Decoration" />
                </div>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="boat_name">Boat Name</label>
                            <input type="text" id="boat_name" {...register("boat_name")} placeholder="Boat Name" />
                            {errors.boat_name && <p className="error-text">{errors.boat_name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" {...register("email")} placeholder="xyz@gmail.com" />
                            {errors.email && <p className="error-text">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="captain_name">Captain Name</label>
                            <input type="text" id="captain_name" {...register("captain_name")} placeholder="Captain Name" />
                            {errors.captain_name && <p className="error-text">{errors.captain_name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="angler_name">Event Name</label>
                            <input type="text" id="angler_name" {...register("angler_name")} placeholder="Event Name" />
                            {errors.angler_name && <p className="error-text">{errors.angler_name.message}</p>}
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" {...register("city")} />
                            {errors.city && <p className="error-text">{errors.city.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" {...register("phone")} />
                            {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                        </div>
                    </div>

                    <div className="form-row">
                     
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" {...register("state")} />
                            {errors.state && <p className="error-text">{errors.state.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" {...register("address")} />
                            {errors.address && <p className="error-text">{errors.address.message}</p>}
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? <div className="loader"></div> : "Update"}
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
