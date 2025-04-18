import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../../components/Button";
import EventsNavbar from "../../../components/EventsNavbar";
import BurunuBomaImage from "../../../assets/images/BomaMain.png";
import TournamentInfo from "../../../components/TornamentInfo";
import {
  useGetTournamentBySlugQuery,
  useRegisterForTournamentMutation,
} from "../../../features/Registration/api";

const Information = () => {
  const location = useLocation();
  const eventName = location.pathname.split("/")[2];

  const {
    data: tournamentData,
    isLoading,
    isError,
  } = useGetTournamentBySlugQuery(eventName);

  const [registerForTournament, { isLoading: isRegistering }] =
    useRegisterForTournamentMutation();

  const handleRegister = async () => {
    const token = localStorage.getItem("authToken");
    const eventId = tournamentData?.tournament?.id;

    if (!token || !eventId) {
      toast.error("Missing token or tournament info");
      return;
    }

    try {
      const response = await registerForTournament(eventId).unwrap();
    
      if (response.success) {
        toast.success("Successfully registered for the tournament!");
      } else {
        toast.error(response.message || "Registration failed.");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load tournament info.</div>;
  console.log("Fetched tournament data:", tournamentData);
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
              <b>May 2 to May 4, 2025</b>, this three-day event welcomes anglers
              from around the world to showcase their skills and sportsmanship
              in a vibrant, eco-conscious setting. Designed to unite resorts and
              anglers in a spirit of friendly rivalry, Brunu Boma shines a light
              on ethical fishing, teamwork, and vibrant community experiences
              <br />
              <div className="mt-4">
                <Button
                  text={isRegistering ? "Registering..." : "Register Here"}
                  width="100%"
                  onClick={handleRegister}
                  disabled={isRegistering}
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
