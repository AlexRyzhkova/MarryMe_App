import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function CountDown({ date }) {
  const countDownDate = new Date(date).getTime();
  const now = new Date().getTime();
  const difference = countDownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return (
    <>
      <Days>{days} Tagen</Days>
    </>
  );
}
//Styling
const Days = styled.div`
  text-align: center;
  font-family: var(--font-lora);
  font-size: 2.2rem;
`;

CountDown.propTypes = {
  date: PropTypes.any,
};
