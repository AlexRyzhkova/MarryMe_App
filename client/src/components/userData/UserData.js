import React from "react";
import { getAccount } from "../../apiAccount/fetchAccount";

export default function UserData() {
  console.log(getAccount);

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const doGetAccount = async () => {
      const newUser = await getAccount();
      setUser(newUser);
    };
    doGetAccount();
    console.log(doGetAccount);
  }, []);

  return (
    <>
      <div>{user && <h1>{user.yourName}</h1>}</div>
      <div>{user && <h1>und {user.partnerName} heiraten</h1>}</div>
      {user && <div>{user.date}</div>}
    </>
  );
}
