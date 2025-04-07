import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import WahooOpenRegistration from "./BlueMarlineCove/WahooOpenRegistration";
import ChubCayRegistration from "./ChubClay/ChubCayRegistration";
import WestEndMeatRegistration from "./WestEndMeat/WestEndMeatRegistration";

import Select from '../../components/Select'

import { getTokenFromLocalStorage, IsAdminLoggedIn } from "../../utils/helpers";
import {checkIsUserLoggedIn} from '../../utils/common';

import "../../assets/css/dashboard.css";

const TournamentRegistration = () => {
  const [tournament, setTournament] = useState("chub_cay");
  const navigate = useNavigate()

  useEffect(() => {
    pageInitialization();
  }, []);

  const pageInitialization = async () => {
    await checkIsUserLoggedIn(navigate);
  };
  const tournamentComponents = {
    wahoo_open: WahooOpenRegistration,
    chub_cay: ChubCayRegistration,
    west_end_meat: WestEndMeatRegistration,
  };

  const renderTournamentComponent = () => {
    const Component = tournamentComponents[tournament];
    return Component ? <Component /> : null;
  };

  const options = [
    { label: "Chub Cay", value: "chub_cay" },
    { label: "Wahoo Open", value: "wahoo_open" },
    { label: "West End Meat", value: "west_end_meat" },
  ];

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
