export const postTodo = async (toDo) => {
  const response = await fetch("/api/toDos", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(toDo),
  });

  if (!response.ok) {
    throw new Error(response);
  }

  return response;
};
