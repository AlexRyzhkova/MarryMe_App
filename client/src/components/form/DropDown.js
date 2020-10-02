import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DropDown = ({ category, handleCategoryChange }) => {
  const options = [
    "",
    "Location",
    "Musik",
    "Foto/Video",
    "Bekleidung",
    "Blumen und Deko",
    "Einladungen",
    "Sonstiges",
  ];

  const defaultOption = options[0];

  return (
    <DropdownContainer>
      <Dropdown
        category={category}
        options={options}
        onChange={handleCategoryChange}
        value={defaultOption}
        placeholder="Wähle die Kategorie"
      />
    </DropdownContainer>
  );
};

export default DropDown;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
`;
DropDown.propTypes = {
  category: PropTypes.string,
  handleCategoryChange: PropTypes.func,
};
