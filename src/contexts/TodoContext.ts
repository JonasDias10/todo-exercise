import { createContext } from "react";
import { Todo } from "types/todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
