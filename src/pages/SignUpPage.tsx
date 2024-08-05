import { AuthSidebar } from "@components/AuthSidebar/AuthSidebar";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/signin");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <AuthSidebar />
      <Grid item xs={12} md={5} sx={{ boxShadow: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
            Criar Conta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ padding: 2, maxWidth: 500 }}
            noValidate
          >
            <TextField
              id="name"
              label="Nome"
              type="text"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="email"
              label="E-mail"
              name="email"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Senha"
              type="password"
              margin="normal"
              required
              fullWidth
            />
            <Button type="submit" fullWidth variant="contained">
              Criar Conta
            </Button>

            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button variant="text" onClick={() => navigate("/signin")}>
                Já tem uma conta? Faça Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
