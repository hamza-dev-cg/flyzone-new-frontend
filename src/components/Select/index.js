import React from "react";
import Select from "react-select";
import styled from "styled-components";

// Styled component outside the component
const StyledSelect = styled(Select)`
  .react-select__control {
    min-height: 42px !important;
    font-size: 14px;
    border-radius: 6px;
    max-width: ${(props) => props.$maxWidth || '200px'};
    min-width: 100px;
  }

  .react-select__menu {
    font-size: 14px;
    z-index: 9999;
  }

  .react-select__option {
    padding: 15px !important;
  }
`;

const App = ({
  options = [],
  onChange,
  value,
  label,
  loading,
  defaultValue,
  placeholder,
  maxWidth,
}) => {
  return (
    <>
      {label && <label className="mb-2">{label}</label>}
      <StyledSelect
        classNamePrefix="react-select"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        isLoading={loading}
        placeholder={placeholder}
        $maxWidth={maxWidth} // Pass styled prop with $
      />
    </>
  );
};

export default App;
