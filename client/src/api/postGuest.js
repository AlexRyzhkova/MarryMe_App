export const postGuest = async (guest) => {
  const response = await fetch("/api/guests", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(guest),
  });

  if (!response.ok) {
    throw new Error(response);
  }

  return response;
};
