import { AccountBoxSharp, AddBox } from "@mui/icons-material";
import { AddTodo } from "@components/AddTodo/AddTodo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  TextField,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export function CustomAppBar({ search, setSearch }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => navigate("/signin");

  return (
    <Box position="fixed">
      <AppBar color="inherit" sx={{ height: { sm: 60, xs: 100 } }}>
        <Toolbar>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountBoxSharp width={30} height={30} />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              gap: { sm: 2, xs: 1 },
              flexDirection: { sm: "row", xs: "column" },
              paddingY: { sm: 0, xs: 2 },
            }}
          >
            <TextField
              size="small"
              label="Buscar TODOs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              size="small"
              onClick={() => setOpenModal(true)}
              variant="contained"
            >
              <AddBox width={30} height={30} />
              Novo Todo
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>

      <AddTodo open={openModal} handleClose={() => setOpenModal(false)} />
    </Box>
  );
}
