import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function UserDataNames({ account }) {
  return (
    <NamesContainer>
      <h1>
        {account.yourName} und {account.partnerName}
      </h1>
      <p> heiraten in</p>
    </NamesContainer>
  );
}
//Styling
const NamesContainer = styled.div`
  text-align: center;
  p {
    text-align: center;
    font-family: var(--font-lora);
    font-size: 2.2rem;
  }
`;

UserDataNames.propTypes = {
  account: PropTypes.any,
};
