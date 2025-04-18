import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { formatDateRange } from "../../utils/helpers";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    useAddMemeberMutation,
    useGetAllUserMutation,
} from "../../features/user/api";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { FiPlus, FiX } from "react-icons/fi";

import "../../assets/css/profile.css";
import Line from "../../assets/images/line.png";
import FlyZoneLogo from "../../assets/images/Fly-Zone-Logo.png";
import WestEndMeatfishImage from "../../assets/images/West-End-Meatfish-Mania_large.png";
import BurunuBomaLogo from "../../assets/images/BurunuBomaImg.png";

const EventDetails = () => {
    const location = useLocation();
    const profileEvent = location?.state?.profileEvent;
    const token = useSelector((state) => state?.user?.token);
    const navigate = useNavigate();

    const [showMemberSelect, setShowMemberSelect] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [users, setUsers] = useState([]);

    const [AddMemeber] = useAddMemeberMutation();
    const [GetAllUser] = useGetAllUserMutation();

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await GetAllUser({ token });
                if (response?.data?.success) {
                    const filteredUsers = response.data.users.filter(
                        (u) => u.id !== profileEvent?.scoringDetails?.userId
                    );
                    setUsers(filteredUsers);
                } else {
                    toast.error("Failed to load users.");
                }
            } catch (err) {
                console.error(err);
                toast.error("Error fetching members!");
            }
        };
        fetchAllUsers();
    }, [GetAllUser, token]);

    const userOptions = users.map((user) => ({
        value: user.id,
        label: user.firstName,
    }));

    const toggleMemberSelection = () => {
        setShowMemberSelect(!showMemberSelect);
    };

    const handleAddMembers = async () => {
        try {
            const memberIds = selectedOptions.map((option) => option.value);

            if (memberIds.length === 0) {
                toast.warn("Please select at least one team member before adding!");
                return;
            }

            const data = {
                eventId: profileEvent.eventId,
                captainId: profileEvent?.scoringDetails?.userId,
                teamMemberIds: memberIds,
            };

            const response = await AddMemeber({ data, token });
            if (response?.data?.success) {
                toast.success(response.data.message);
            } else {
                toast.error("Failed to add members.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error adding members!");
        }
    };


    return (
        <div className="container layout-space">
            <div className="main-forum-detail-1">
                <div className="d-flex flex-column align-items-left justify-content-left">
                    <section>
                        <div className="container mt-4 add-z-index overflow-hidden">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="des-container">
                                        <IoMdArrowBack
                                            className="cursor-pointer fs-1"
                                            onClick={() => navigate(-1)}
                                        />
                                        <h2 className="title">{profileEvent.eventName} Tournament</h2>
                                        <div className="des">
                                            <img src={Line} alt="line" className="responsive-line" />
                                            <p className="text-center fw-bold">
                                                {formatDateRange(profileEvent?.startDate, profileEvent?.endDate)}
                                            </p>
                                        </div>
                                        <p className="events-para">{profileEvent?.eventDescription}</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column gap-4 justify-content-center">
                                    <div className="d-flex justify-content-center mb-4">
                                        {profileEvent.eventSlug === "burunu-boma" ? (
                                            <img src={BurunuBomaLogo} alt="Burunu Boma Logo" width="250" />
                                        ) : (
                                            <img src={FlyZoneLogo} alt="Fly Zone Logo" width="250" />
                                        )}
                                    </div>
                                    <motion.div
                                        className="d-flex justify-content-center mt-0"
                                        initial={{ x: "100vw", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 60,
                                            damping: 15,
                                            delay: 0.5,
                                        }}
                                    >
                                        <img
                                            src={WestEndMeatfishImage}
                                            alt="West End Meatfish Mania"
                                            width="220"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="mb-4 text-end">
                        <Button
                            startIcon={showMemberSelect ? <FiX /> : <FiPlus />}
                            text={showMemberSelect ? "Cancel" : "Add Members"}
                            onClick={toggleMemberSelection}
                            variant={showMemberSelect ? "danger" : "primary"}
                        />
                    </div>

                    {showMemberSelect && (
                        <div className="p-4 shadow rounded-3 bg-white text-start " >
                            <h4 className="mb-3">Select Team Members</h4>

                            <Select
                                isMulti
                                options={userOptions}
                                value={selectedOptions}
                                onChange={setSelectedOptions}
                                placeholder="Choose members..."
                                disableWidth={true}
                            />

                            <div className="d-flex justify-content-end mt-3">
                                <Button
                                    startIcon={<FiPlus />}
                                    text="Add to Team"
                                    onClick={handleAddMembers}
                                />
                            </div>
                        </div>
                    )}

                </div>
                <hr />
            </div>
            <ToastContainer />
        </div>
    );
};

export default EventDetails;
