import React from "react";
import { getAccount } from "../apiAccount/fetchAccount";
import Countdown from "../components/countDown/CountDown";
import Header from "../components/Header/Header";
import UserDataDate from "../components/userData/UserDataDate";
import UserDataNames from "../components/userData/UserDataNames";
import useAsync from "../hooks/useAsync";
import bgImageSrc from "../assets/homeBgImage.png";
import styled from "@emotion/styled";

export default function Home() {
  const { data: account, error, loading } = useAsync(getAccount);

  return (
    <HomeContainer>
      <Header />
      {error && <p>Error</p>}
      {loading && <p>Loading ...</p>}
      {account && <UserDataNames account={account} />}
      <section>{account && <Countdown date={account.date} />}</section>
      {account && <UserDataDate account={account} />}
    </HomeContainer>
  );
}

// Styling

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  h1,
  p {
    margin-top: 0.5em;
  }
  section {
    display: flex;
    flex-direction: column;
    background-image: url(${bgImageSrc});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    div {
      margin: auto;
    }
  }
`;
