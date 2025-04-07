import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

// Styled component for custom styles
const StyledSelect = styled(Select)`
  .react-select__control {
    min-height: 42px !important; /* Increase the height of the select box */
    font-size: 14px;
    border-radius:6px;
    max-width:200px;
    min-width:100px
  }

  .react-select__menu {
    font-size: 14px;
    z-index:9999;
  }

  .react-select__option {
    padding: 15px !important; /* Increase the height of each option */
  }
`;

const App = ({options=[],onChange,value,label,loading,defaultValue,placeholder}) => {
  const [selectedOption, setSelectedOption] = useState(null);


  return (
    <>
  {label && <label className="mb-2">{label}</label> }
    <StyledSelect
      classNamePrefix="react-select"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      isLoading={loading}
      placeholder={placeholder}
    />
    </>
  );
};

export default App;
