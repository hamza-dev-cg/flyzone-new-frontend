import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { useGetTournamentMutation } from "../../features/tournaments/api";
import Avatar from "react-avatar";
import { RiShip2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { setTournament } from "../../features/tournaments/tournamentSlice";
import "../../assets/css/profile.css";

const PublicProfile = () => {
  const location = useLocation();;
  const dispatch = useDispatch()
  const userData = location?.state?.user;
  const [GetTournament] = useGetTournamentMutation();

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await GetTournament().unwrap();
        dispatch(setTournament(response)); 
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, [GetTournament, dispatch]);
  const tournament = useSelector((state) => state.tournament); 
  const PublicProfileData =  tournament?.tournament?.filter(x => x.boat_name === userData?.boat_name)[0]
  console.log(PublicProfileData,"PublicProfileData")
  return (
    <div className="container layout-space">
      <div className="main-forum-detail-1">
        <div className="d-flex flex-column justify-content-center text-center">
          <div className="d-flex justify-content-center w-full">
            <div className="d-flex justify-content-center w-full flex-column align-items-center">
              <Avatar size="120" name={userData?.boat_name} round={true} />
            </div>
          </div>
          <h5 className="mt-2">{userData?.captain_name || "Guest User"}</h5>
          <hr />
          <div className="details">
          <div className="">
            <h5 className="text-left mb-3">Contact Info</h5>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 ps-md-5">
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check"><RiShip2Line /> </span>
                <p className="mb-0">{userData?.boat_name}</p>
              </div>
              <div className="d-flex flex-grow-1 flex-row align-items-center">
                <span class="info-check"><FaRegUser /> </span>
                <p className="mb-0">{PublicProfileData?.captain_name}</p>
              </div>
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check"><LuUsersRound /> </span>
                <p className="mb-0">{PublicProfileData?.number_of_team_members}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;

