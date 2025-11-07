import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useColorMode } from "../context/ColorModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  const { pathname } = useLocation();
  const { mode, toggleColorMode } = useColorMode();

  const isActive = (path) => ({
    color: pathname === path ? "#fff" : "#ddd",
    fontWeight: pathname === path ? "bold" : "normal",
  });

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: 20, fontWeight: "bold" }}>Gestión Veterinaria</Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button component={Link} to="/" sx={isActive("/")}>
            Home
          </Button>
          <Button component={Link} to="/clientes" sx={isActive("/clientes")}>
            Clientes
          </Button>
          <Button component={Link} to="/mascotas" sx={isActive("/mascotas")}>
            Mascotas
          </Button>

          {/* ✅ Botón Dark / Light Mode */}
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
