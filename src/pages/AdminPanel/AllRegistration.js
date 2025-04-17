import React, { useState, useEffect } from "react";
import axios from "axios";
import {useGetAllTournamentForAdminMutation} from '../../features/tournaments/api'

import { useNavigate } from "react-router-dom";

import WahooOpenRegistration from "./BlueMarlineCove/WahooOpenRegistration";
import ChubCayRegistration from "./ChubClay/ChubCayRegistration";
import WestEndMeatRegistration from "./WestEndMeat/WestEndMeatRegistration";
import BurunuBomaRegistration from "./BurunuBoma/BurunuBomaRegistration";

import Select from '../../components/Select'

import { getTokenFromLocalStorage, IsAdminLoggedIn } from "../../utils/helpers";
import {checkIsUserLoggedIn} from '../../utils/common';

import "../../assets/css/dashboard.css";

const TournamentRegistration = () => {
  const [tournament, setTournament] = useState("chub_cay");
  const [showTournament, setShowTournament] = useState([]);
  const [getTournamentAPI] = useGetAllTournamentForAdminMutation();
  const navigate = useNavigate()
  const fetchTournaments = async () => {
    try {
      const response = await getTournamentAPI();
      if (response?.data?.tournaments) {
        setShowTournament(response.data.tournaments);
      } else {
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    pageInitialization();
    fetchTournaments();
  }, []);

  const pageInitialization = async () => {
    await checkIsUserLoggedIn(navigate);
  };
  const tournamentComponents = {
    wahoo: WahooOpenRegistration,
    chub_cay: ChubCayRegistration,
    west_end_meat: WestEndMeatRegistration,
    burunu_boma: BurunuBomaRegistration,
  };

  const renderTournamentComponent = () => {
    const Component = tournamentComponents[tournament];
    return Component ? <Component /> : null;
  };

  const options = showTournament.map((x) => ({
    value: x.name.toLowerCase().replace(/\s+/g, "_"),
    label: x.name,
  }));
  

  return (
    <div>
      <div className="header-row">
        <h1>Registration</h1>
      </div>
      <div className="d-flex justify-content-end mt-4 mb-2">
        <Select options={options} placeholder="Select Tournament"  onChange={(selected)=>setTournament(selected.value)}     value={options.find(option => option.value === tournament)} />
      </div>
      {renderTournamentComponent()}
    </div>
  );
};

export default TournamentRegistration;
