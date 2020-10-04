export const getTodos = async () => {
  const response = await fetch("/api/toDos");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedTodos = await response.json();
  return fetchedTodos;
};

export const getToDo = async (id) => {
  const response = await fetch(`/api/toDos/${id}`);

  if (!response.ok) {
    throw new Error(response);
  }
  const fetchedToDo = await response.json();
  return fetchedToDo;
};
