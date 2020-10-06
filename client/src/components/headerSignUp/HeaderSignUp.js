import React from "react";
import styled from "@emotion/styled";
import logoSrc from "../../assets/logo.svg";

const HeaderSignUp = () => {
  return (
    <Container>
      <img src={logoSrc} alt="Marry me logo" />
    </Container>
  );
};

export default HeaderSignUp;

//Styling
const Container = styled.div`
  background-color: #a79292;
  display: flex;
  padding: 5px;
  img {
    margin: auto;
  }
`;
