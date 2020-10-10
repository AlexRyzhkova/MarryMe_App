export const getGuests = async () => {
  const response = await fetch("/api/guests");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedGuests = await response.json();
  return fetchedGuests;
};
