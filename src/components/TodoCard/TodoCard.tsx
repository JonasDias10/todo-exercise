import { Todo } from "types/todo";
import { useTodos } from "@hooks/useTodos";
import { Delete, Edit } from "@mui/icons-material";
import { useSnackbar } from "@hooks/useSnackbar";
import { useState } from "react";
import { UpdateTodo } from "@components/UpdateTodo/UpdateTodo";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { ConfirmDelete } from "@components/ConfirmDelete/ConfirmDelete";

type Props = {
  todo: Todo;
};

export function TodoCard({ todo }: Props) {
  const { deleteTodo } = useTodos();
  const { setMessage, setOpen } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
    setOpen(true);
    setMessage(`${todo.title} deletado com sucesso!`);
  };

  return (
    <Card sx={{ width: 280, minHeight: 200 }}>
      <CardHeader
        title={todo.title}
        subheader={
          <span
            style={{
              display: "inline-block",
              fontWeight: "bold",
              backgroundColor: todo.color,
              width: "100%",
              height: 10,
              borderRadius: 3,
            }}
          />
        }
      />
      <CardContent>
        <Typography variant="body2">{todo.description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="outlined" onClick={() => setOpenModal(true)}>
          <Edit /> Editar
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => setOpenDialog(true)}
        >
          <Delete /> Deletar
        </Button>
      </CardActions>

      <UpdateTodo
        open={openModal}
        handleClose={() => setOpenModal(false)}
        todo={todo}
      />

      <ConfirmDelete
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleConfirm={handleDelete}
      />
    </Card>
  );
}
