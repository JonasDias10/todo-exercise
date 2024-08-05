import { useState } from "react";
import { Todo } from "types/todo";

export type TodoWithoutId = Omit<Todo, "id">;

export const useTodoForm = (todo?: TodoWithoutId) => {
  const [values, setValues] = useState<TodoWithoutId>({
    title: todo?.title || "",
    description: todo?.description || "",
    color: todo?.color || "#000000",
  });

  const resetForm = () => {
    setValues({
      title: "",
      description: "",
      color: "#000000",
    });
  };

  return {
    values,
    setValues,
    resetForm,
  };
};
