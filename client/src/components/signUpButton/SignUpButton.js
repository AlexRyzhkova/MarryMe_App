import React from "react";
import styled from "@emotion/styled";

const SignUpButton = () => {
  return <StyledSignUpButton>Registrieren</StyledSignUpButton>;
};

export default SignUpButton;

const StyledSignUpButton = styled.button`
  text-align: center;
  border-radius: 1.8em;
  padding: 0.6em 1.8em;
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--font-color-light);
  background-color: var(--button-bg-color);
`;
