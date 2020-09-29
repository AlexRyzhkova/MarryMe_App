export const postAccount = async (account) => {
  const response = await fetch("/api/account", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(account),
  });

  if (!response.ok) {
    throw new Error(response);
  }

  return response;
};
