import { SnackbarProvider } from "@contexts/SnackBarProvider";
import { TodoProvider } from "@contexts/TodoProvider";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "routes/AppRouter";

export function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <SnackbarProvider>
          <CssBaseline />
          <AppRoutes />
        </SnackbarProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}
