import React from "react";
import styled from "@emotion/styled";

const Button = () => {
  return <ButtonLight>Speichern</ButtonLight>;
};

export default Button;

const ButtonLight = styled.button`
  text-align: center;
  border-radius: 30px;
  padding: 5px 20px;
  outline: none;
  border: none;
  background-image: var(--base-bg-color);
  box-shadow: 2px 2px 6px 0px #141313;
  cursor: pointer;
`;
