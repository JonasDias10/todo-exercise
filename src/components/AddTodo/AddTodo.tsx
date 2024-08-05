import { useSnackbar } from "@hooks/useSnackbar";
import { useTodoForm } from "@hooks/useTodoForm";
import { useTodos } from "@hooks/useTodos";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const generateId = (): number => {
  const currYear = new Date().getFullYear();
  const timestamp = Date.now();
  return parseInt(`${currYear}${timestamp}`);
};

export function AddTodo({ open, handleClose }: Props) {
  const { addTodo } = useTodos();
  const { setMessage, setOpen } = useSnackbar();
  const { values, setValues, resetForm } = useTodoForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todo = {
      id: generateId(),
      ...values,
    };

    addTodo(todo);

    setOpen(true);
    setMessage(`${todo.title} adicionado com sucesso!`);

    resetForm();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} keepMounted>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 500,
          width: "98%",
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 24,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Adicionar TODO
        </Typography>
        <TextField
          label="Nome"
          value={values.title}
          onChange={(event) =>
            setValues({ ...values, title: event.target.value })
          }
          required
        />
        <TextField
          multiline
          rows={4}
          label="Descrição"
          value={values.description}
          onChange={(event) =>
            setValues({ ...values, description: event.target.value })
          }
          required
        />
        <TextField
          label="Cor"
          type="color"
          value={values.color}
          onChange={(event) =>
            setValues({ ...values, color: event.target.value })
          }
          required
        />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button type="submit" variant="contained">
            Adicionar
          </Button>
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
