import React, { useState, useEffect } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import { useNavigate } from "react-router-dom";
import { convertToFormData } from "../../utils/helpers";
import { IoSend } from "react-icons/io5";
//component
import WahooOpenLeaderBoard from "../../components/LeaderBoard/BlueMarlineCoveWahooOpen";
import ChampionshipLeaderBoard from "../../components/LeaderBoard/BlueMarlineChampionship";
import ChubClayClassicLeaderBoard from "../../components/LeaderBoard/ChubClayClassic";
import ChubClayOpen from "../../components/LeaderBoard/ChubClayOpen";
import ChubClayInvitational from "../../components/LeaderBoard/ChubClayInvitational";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { TournamentProvider } from "../../components/TourementContext/tourmentContext";
import TournamentSelect from "../../components/TourementContext/tourmentSelect";
//images
import MeatFishMania from "../../assets/images/west-end-meatfish-mania_large.svg";
import {
  useCreateCommentMutation,
  useGetOneThreadCommentsMutation,
  useGetSubCategoryMutation,
} from "../../features/forum/api";
import BurunuBomaImage from "../../assets/images/BomaMain.png";
import Avatar from "react-avatar";
import ChatBox from "../../components/Chatbox";

const LeaderBoard = ({
  show,
  label,
  chatBox,
  defaultChatState = false,
  pageType = "full",
}) => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState("Chub Cay Invitational");
  const [selectedOption, setSelectedOption] = useState(null);
  const [blueMarlineCoveWahooOpen, setBlueMarlineCoveWahooOpen] = useState([]);
  const [blueMarlineCoveChampionship, setBlueMarlineCoveChampionship] =
    useState([]);
  const [chubClayClassic, setChubClayClassic] = useState([]);
  const [chubClayOpen, setChubClayOpen] = useState([]);
  const [chubClayInvitational, setChubClayInvitational] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatSection, setChatSection] = useState(defaultChatState);
  const [commentnew, setCommentsNew] = useState();
  const [GetComments] = useGetOneThreadCommentsMutation();
  const [createComment] = useCreateCommentMutation();
  const [getThreads] = useGetSubCategoryMutation();
  const [message, setMessage] = useState("");
  const [optionsData, setOptionsData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isSending, setIsSending] = useState(false);

  const getTournamentRecord = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://flyzone.ai/flyzone_laravel/api/tournaments",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        const getWahooOpen = response.data?.filter(
          (record) =>
            record.tournament_category === "Blue Marline Cove Wahoo Open"
        );
        if (getWahooOpen.length > 0) {
          setBlueMarlineCoveWahooOpen(getWahooOpen);
        }

        const getChampionship = response.data?.filter(
          (record) =>
            record.tournament_category === "Blue Marline Cove Championship"
        );
        if (getChampionship.length > 0) {
          setBlueMarlineCoveChampionship(getChampionship);
        }
        const getChubClayClassic = response.data?.filter(
          (record) => record.tournament_category === "Chub Cay Classic"
        );
        if (getChubClayClassic.length > 0) {
          setChubClayClassic(getChubClayClassic);
        }
        const getChubClayOpen = response.data?.filter(
          (record) => record.tournament_category === "Chub Cay Open"
        );
        if (getChubClayClassic.length > 0) {
          setChubClayOpen(getChubClayOpen);
        }

        const getChubClayInvitational = response.data?.filter(
          (record) => record.tournament_category === "Chub Cay Invitational"
        );
        if (getChubClayInvitational.length > 0) {
          setChubClayInvitational(getChubClayInvitational);
        }
      }
    } catch (err) {
      console.log("Error : ", err);
    }

    setLoading(false);
  };
  useEffect(() => {
    getTournamentRecord();
  }, [tournament]);
  const handleDropdownChange = (e) => {
    const value = e.target.options[e.target.selectedIndex].value;
    setTournament(value);
  };
  const tournaments = [
    {
      id: "Burunu-Boma",
      image: BurunuBomaImage,
      date: "May 2th to 4th, 2025",
      isRegistrationOpen: true,
      width: "120",
      link: "",
      isRegistrationOpen: false,
      learnMore: "/tournaments/burunu-boma",
    },
    {
      id: "meatfish-mania",
      image: MeatFishMania,
      date: "May 8th to 10th, 2025",
      isRegistrationOpen: true,
      width: "160",
      link: "/west-end-meat-fish/register/3",
      learnMore: "/tournaments/west-end-meatfish-mania",
    },
  ];

  const TournamentCard = ({
    image,
    date,
    link,
    isRegistrationOpen,
    width,
    learnMore,
  }) => {
    return (
      <div className="border border-danger tournament-card">
        <div
          className="d-flex first-banner"
          onClick={(e) => {
            if (!isRegistrationOpen) return;
            navigate(`${link}`);
          }}
        >
          <img src={image} alt="Tournament Banner" width={width} />
          <div className="align-content-lg-end gap-1 info-event">
            <h4>Happening From</h4>
            <span>{date}</span>
            <div className="d-flex flex-column flex-lg-row gap-2 mt-2">
              <button
                className="btn btn-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(learnMore);
                }}
              >
                Learn More
              </button>
              {isRegistrationOpen && (
                <button
                  className="btn btn-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(link);
                  }}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    handleGetAllThreads();
  }, [tournament]);

  useEffect(() => {
    console.log("Pusher useEffect running in this component...");

    const pusher = new Pusher("e043156dd8c59ea21bfe", {
      cluster: "us2",
      encrypted: true,
    });

    const channel = pusher.subscribe(`thread-chat-${selectedOption?.value}`);
    console.log("Subscribed to Pusher channel:", `${selectedOption?.value}`);

    channel.bind("App\\Events\\MessageSent", (data) => {
      console.log("Received Pusher event:", data);
      const newData = {
        ...data,
        created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      };
      if (newData) {
        setCommentsNew((prevComments) => [...prevComments, newData]);
      }
    });
    handleGetAllComments();

    return () => {
      console.log("Unsubscribing from channel:", `${selectedOption?.value}`);
      channel.unbind_all();
      pusher.unsubscribe(`${selectedOption?.value}`);
    };
  }, [selectedOption?.value]);

  const handleGetAllThreads = async () => {
    try {
      const response = await getThreads(tournament);
      if (
        response?.data?.data.length > 0 &&
        response?.data?.data[0]?.threads?.length > 0
      ) {
        const formattedOptions = response?.data?.data[0]?.threads.map(
          (thread) => ({
            value: thread.id,
            label: thread.name,
          })
        );

        setOptionsData(formattedOptions);
        if (formattedOptions.length > 0) {
          setSelectedOption(formattedOptions[0]);
        }
      } else {
        setOptionsData([]);
        setSelectedOption(null);
      }
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  const handleGetAllComments = async () => {
    try {
      const response = await GetComments(selectedOption?.value);
      if (response?.data?.messages) {
        setCommentsNew(response.data.messages);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleReplySubmit = async () => {
    if (!selectedOption?.value || !message.trim()) return;
    setIsSending(true);
    const newReply = {
      message: message,
      thread_id: selectedOption.value,
    };
    const formData = convertToFormData(newReply);
    try {
      const response = await createComment(formData);
      if (response?.data) {
        await handleGetAllComments();
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    } finally {
      setIsSending(false);
      setMessage("");
    }
  };

  return (
    <div className="">
      <div
        className={`row ${
          chatSection ? "flex-column-reverse flex-lg-row " : ""
        }`}
      >
        <div className="w-full">
          <section
            className={`leaderboard-page ${label ? "" : "layout-space"}`}
          >
            <div>
              <div className="  d-flex align-items-center justify-content-center filter-row pb-4 ">
                <div>
                  <TournamentProvider>
                    <TournamentSelect
                      value={tournament}
                      onChange={handleDropdownChange}
                    >
                      <option value="Chub Cay Classic">Chub Cay Classic</option>
                      <option value="Chub Cay Open">Chub Cay Open</option>
                      <option value="Chub Cay Invitational">
                        Chub Cay Invitational
                      </option>
                    </TournamentSelect>
                  </TournamentProvider>
                </div>
              </div>

              {!loading && tournament === "Blue Marline Cove Wahoo Open" && (
                <WahooOpenLeaderBoard
                  blueMarlineCovewahooOpen={blueMarlineCoveWahooOpen}
                />
              )}
              {!loading && tournament === "Blue Marline Cove Championship" && (
                <ChampionshipLeaderBoard
                  blueMarlineChampionSip={blueMarlineCoveChampionship}
                />
              )}
              {!loading && tournament === "Chub Cay Classic" && (
                <div className=" d-flex flex-column flex-lg-row gap-4">
                  <div className="left-leadberboard">
                    <ChubClayClassicLeaderBoard
                      chubClayClassic={chubClayClassic}
                      pageType={pageType}
                    />
                  </div>
                  {pageType === "home" && (
                    <ChatBox
                      user={user}
                      commentnew={commentnew}
                      optionsData={optionsData}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      message={message}
                      setMessage={setMessage}
                      handleReplySubmit={handleReplySubmit}
                      isSending={isSending}
                    />
                  )}
                </div>
              )}

              {!loading && tournament === "Chub Cay Open" && (
                <div className=" d-flex flex-column flex-lg-row gap-4">
                  <div className="left-leadberboard">
                    <ChubClayOpen
                      chubClayClassic={chubClayOpen}
                      pageType={pageType}
                    />
                  </div>
                  {pageType === "home" && (
                    <ChatBox
                      user={user}
                      commentnew={commentnew}
                      optionsData={optionsData}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      message={message}
                      setMessage={setMessage}
                      handleReplySubmit={handleReplySubmit}
                      isSending={isSending}
                    />
                  )}
                </div>
              )}
              {!loading && tournament === "Chub Cay Invitational" && (
                <div className=" d-flex flex-column flex-lg-row gap-4">
                  <div className="left-leadberboard">
                    <ChubClayInvitational
                      chubClayClassic={chubClayInvitational}
                      pageType={pageType}
                    />
                  </div>
                  {pageType === "home" && (
                    <ChatBox
                      user={user}
                      commentnew={commentnew}
                      optionsData={optionsData}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      message={message}
                      setMessage={setMessage}
                      handleReplySubmit={handleReplySubmit}
                      isSending={isSending}
                    />
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
