import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function UserDataDate({ account }) {
  return (
    <>
      <Date>{account.date}</Date>
    </>
  );
}

UserDataDate.propTypes = {
  account: PropTypes.any,
};

//styling
const Date = styled.div`
  text-align: center;
  font-family: var(--font-lora);
  font-size: 2.2rem;
  color: var(--font-color-dark);
`;
