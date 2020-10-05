import React from "react";
import SignUpForm from "../components/signUpForm/SignUpForm";
import HeaderSignUp from "../components/headerSignUp/HeaderSignUp";
import signUpPictureSrc from "../assets/signUpBg.png";
import styled from "@emotion/styled";
// import useAsync from "../hooks/useAsync";
// import postAccount from "../apiAccount/postAccount";
export const SignUpPage = () => {
  // const { data: account, error, loading, refetch } = useAsync(postAccount);

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
    padding: 3em 0;
    align-self: stretch;
  }
  h2 {
    padding-top: 1em;
    align-self: center;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  padding: 3.1em 0;
  height: 100%;
  background: url(${signUpPictureSrc});
  background-repeat: no-repeat;
  background-position: 40% 60%;
  background-size: cover;
  background-position: right;
  align-items: center;
  justify-items: center;

  h1 {
    text-align: center;
    margin: auto;
  }
`;
