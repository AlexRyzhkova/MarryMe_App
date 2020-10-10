const deleteGuest = async (guest) => {
  const response = await fetch(`/api/guests/${guest}`, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw response;
  }
  return response;
};

export default deleteGuest;
