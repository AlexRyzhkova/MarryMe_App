export async function deleteTodo(toDo) {
  const response = await fetch(`/api/toDos/${toDo}`, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw response;
  }
  return response;
}
