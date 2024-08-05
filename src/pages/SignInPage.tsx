import { AuthSidebar } from "@components/AuthSidebar/AuthSidebar";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate("/");
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
            Faça Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ padding: 2, maxWidth: 500 }}
            noValidate
          >
            <TextField
              id="email"
              label="E-mail"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Senha"
              type="password"
              margin="normal"
              fullWidth
              required
            />
            <Button type="submit" fullWidth variant="contained">
              Entrar
            </Button>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-between" },
                marginTop: 2,
              }}
            >
              <Button variant="text">Esqueceu sua senha?</Button>
              <Button variant="text" onClick={() => navigate("/signup")}>
                Não tem uma conta? Cadastre-se
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
