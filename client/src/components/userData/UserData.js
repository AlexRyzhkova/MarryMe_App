import React from "react";
import { getAccount } from "../../apiAccount/fetchAccount";
import useAsync from "../../hooks/useAsync";

export default function UserData() {
  const { data: account, error, loading } = useAsync(getAccount);

  return (
    <>
      {error && <p>Error</p>}
      {loading && <p>Loading ...</p>}
      <div>{account && <h1>{account.yourName}</h1>}</div>
      <div>{account && <h1>und {account.partnerName} heiraten am</h1>}</div>
      {account && <h1>{account.date}</h1>}
    </>
  );
}
