export const getAccount = async () => {
  const response = await fetch("/api/account");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedAccount = await response.json();
  console.log(fetchedAccount);
  return fetchedAccount;
};
