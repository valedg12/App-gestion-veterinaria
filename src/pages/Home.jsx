import { Box, Typography, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Bienvenido
        </Typography>
        <Typography>
          Esta es la app de <b>Gestión Veterinaria</b>. Usá el menú para navegar entre clientes y
          mascotas.
        </Typography>
      </Paper>
    </Box>
  );
}
