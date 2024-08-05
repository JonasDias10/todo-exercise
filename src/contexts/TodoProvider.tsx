import { FC, PropsWithChildren, useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "types/todo";
import {
  getTodos,
  addTodo as addTodoService,
  updateTodo as updateTodoService,
  deleteTodo as deleteTodoService,
} from "@services/todoService";

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = () => {
      setTodos(getTodos());
    };

    fetchTodos();
  }, []);

  const addTodo = (todo: Todo) => {
    const updatedTodos = addTodoService(todo);
    setTodos(updatedTodos);
  };

  const updateTodo = (todo: Todo) => {
    const updatedTodos = updateTodoService(todo);
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = deleteTodoService(id);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
