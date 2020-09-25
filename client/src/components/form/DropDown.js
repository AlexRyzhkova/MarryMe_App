import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "@emotion/styled";

const DropDown = () => {
  const [category, setCategory] = useState("");

  function handleCategoryChange(category) {
    setCategory(category.value);
  }

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
