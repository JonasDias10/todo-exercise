import todoLogo from "@assets/to-do.png";
import { Box, Grid, Typography } from "@mui/material";

export function AuthSidebar() {
  return (
    <Grid
      item
      md={7}
      sx={{
        display: { xs: "none", md: "block" },
        background: "linear-gradient(60deg, #6bb9f7 0%, #3C8FDD 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Bem-vindo ao TODO Exercise!
        </Typography>
        <img
          src={todoLogo}
          alt="TODO Exercise logo."
          style={{ maxWidth: "400px", width: "100%" }}
        />
      </Box>
    </Grid>
  );
}
