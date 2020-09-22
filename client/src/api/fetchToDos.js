export const getTodos = async () => {
  const response = await fetch("/api/toDos");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedTodos = await response.json();
  console.log(fetchedTodos);
  return fetchedTodos;
};
