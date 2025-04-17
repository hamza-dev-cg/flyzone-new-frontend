import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import Button from "../../../components/Button";
import EventsNavbar from "../../../components/EventsNavbar";
import BurunuBomaImage from "../../../assets/images/BomaMain.png";
import TournamentInfo from "../../../components/TornamentInfo";
import DaySchedule from "../../../components/DaySchedule";

const Information = () => {
  const location = useLocation();
  const [tournamentDataId, setTournamentDataId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tournamentId, setTournamentId] = useState("");
  const eventName = location.pathname.split('/')[2];
  
  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEV_URL}api/tournament/get-tournament-event/slug/${eventName}`);
        setTournamentDataId(response.data.tournament.id);
      } catch (err) {
        setError("Failed to load tournament info.");
      } finally {
        setLoading(false);
      }
    };

    fetchTournament();
  }, []);
  const handleRegister = async () => {
    const token = localStorage.getItem("authToken");
    if (!token || !tournamentDataId) {
      toast.error("Missing token or tournament info");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_URL}api/registration/burunu-buma`,
        {
          eventId: tournamentDataId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Successfully registered for the tournament!");
      } else {
        toast.error(response.data.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };


  return (
    <div>
           <ToastContainer />
      <section className="whoo-open-hero-section">
        <EventsNavbar basePath="/events" links="burunuBoma" />
        <TournamentInfo
          title={<>Burunu Boma</>}
          imgSrc={BurunuBomaImage}
          altText={BurunuBomaImage}
          date={"May 2nd to May 4th, 2025"}
          description={
            <>
              Brunu Boma 2025, hosted by the Visit Maldives Club, is a
              high-energy fishing competition set in the beautiful waters of
              Marina Bay, Crossroads Maldives. Taking place from{" "}
              <b style={{ fontWeight: "bold" }}>May 2 to May 4, 2025</b>, this
              three-day event welcomes anglers from around the world to showcase
              their skills and sportsmanship in a vibrant, eco-conscious
              setting. Designed to unite resorts and anglers in a spirit of
              friendly rivalry, Brunu Boma shines a light on ethical fishing,
              teamwork, and vibrant community experiences
              <br />
              <div class="mt-4">
                <Button
                  text="Register Here"
                  width="100%"
                  onClick={handleRegister}
                />
              </div>
            </>
          }
        />
      </section>
    </div>
  );
};

export default Information;
