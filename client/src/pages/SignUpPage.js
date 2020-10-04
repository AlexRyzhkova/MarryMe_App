import React from "react";
import SignUpForm from "../components/signUpForm/SignUpForm";
import HeaderSignUp from "../components/headerSignUp/HeaderSignUp";
import signUpPictureSrc from "../assets/signUpBg.png";
import styled from "@emotion/styled";

export const SignUpPage = () => {
  return (
    <Container>
      <HeaderSignUp />
      <ImageContainer>
        <h1>
          Willkommen bei
          <br />
          Marry Me
        </h1>
      </ImageContainer>
      <h2>Melde dich an </h2>
      {/* <img src={signUpPictureSrc} alt="Flowers" /> */}
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;

// styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  form {
    padding-top: 5em;
    align-self: stretch;

    /* background-color: red; */
  }
  h2 {
    padding-top: 5em;
    align-self: center;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  padding: 3.1em 0;
  height: 100%;
  background: url(${signUpPictureSrc});
  background-repeat: no-repeat;
  /* background-position: center; */
  background-attachment: fixed;
  background-size: contain;
  align-items: center;
  justify-items: center;

  h1 {
    text-align: center;
    margin: auto;
  }
`;
