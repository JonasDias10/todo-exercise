import { useState } from "react";
import { Container, Slide, SlideProps, Snackbar } from "@mui/material";
import { useSnackbar } from "@hooks/useSnackbar";
import { CustomAppBar } from "@components/CustomAppBar/CustomAppBar";
import { TodoList } from "@components/TodoList/TodoList";

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="down" />;
};

export function Home() {
  const { open, message, onClose } = useSnackbar();
  const [search, setSearch] = useState("");

  return (
    <Container component="main">
      <CustomAppBar search={search} setSearch={setSearch} />
      <TodoList search={search} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        message={message}
        TransitionComponent={SlideTransition}
      />
    </Container>
  );
}
