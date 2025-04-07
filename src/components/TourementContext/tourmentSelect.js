// TournamentSelect.js
import React from 'react';
import { useTournament } from './tourmentContext';

const TournamentSelect = ({value,onChange,children}) => {

  return (
    <select
      id="dropdown"
      className="form-select custom-select"
      onChange={onChange}
      name="tournament"
      value={value}
    >
      {children}
    </select>
  );
};

export default TournamentSelect;
