import React from "react";
import { getAccount } from "../apiAccount/fetchAccount";
import Countdown from "../components/countDown/CountDown";
import UserDataDate from "../components/userData/UserDataDate";
import UserDataNames from "../components/userData/UserDataNames";
import useAsync from "../hooks/useAsync";

export default function Home() {
  const { data: account, error, loading } = useAsync(getAccount);

  return (
    <div>
      {error && <p>Error</p>}
      {loading && <p>Loading ...</p>}
      {account && <UserDataNames account={account} />}
      {account && <Countdown date={account.date} />}
      {account && <UserDataDate account={account} />}
    </div>
  );
}
