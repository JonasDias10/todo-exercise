import { Todo } from "types/todo";
import { getLocalStorage, setLocalStorage } from "@utils/localStorage";
import { generateId } from "@utils/generateId";

export const addTodo = (todo: Todo): Todo[] => {
  const todos = getTodos();

  todos.push(todo);
  setLocalStorage("todos", JSON.stringify(todos));

  return todos;
};

export const getTodos = (): Todo[] => {
  const todos = getLocalStorage("todos");

  return todos ? JSON.parse(todos) : [];
};

export const deleteTodo = (id: number): Todo[] => {
  const todos = getTodos();

  const newTodos = todos.filter((todo) => todo.id !== id);
  setLocalStorage("todos", JSON.stringify(newTodos));

  return newTodos;
};

export const updateTodo = (todo: Todo): Todo[] => {
  const todos = getTodos();

  const index = todos.findIndex((todoSaved) => todoSaved.id === todo.id);

  if (index === -1) {
    todo.id = generateId();
    todos.push(todo);
    setLocalStorage("todos", JSON.stringify(todos));
    return todos;
  }

  todos[index] = todo;
  setLocalStorage("todos", JSON.stringify(todos));

  return todos;
};
