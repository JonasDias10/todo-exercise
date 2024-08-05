import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e57373",
      }}
    >
      <Typography component="h1" variant="h2" color="white">
        404
      </Typography>
      <Typography variant="h5" color="white">
        Página Não Encontrada
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} component={Link} to="/">
        Voltar para o Início
      </Button>
    </Container>
  );
}
