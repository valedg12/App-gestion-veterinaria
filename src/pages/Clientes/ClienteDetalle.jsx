import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button } from "@mui/material";
import { getClienteById } from "../../services/apiClientes";
import Loader from "../../components/Loader";

export default function ClienteDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClienteById(id)
      .then(setCliente)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Detalle del Cliente</Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography><b>Nombre:</b> {cliente?.nombre}</Typography>
        <Typography><b>Email:</b> {cliente?.email}</Typography>
        <Typography><b>Teléfono:</b> {cliente?.telefono || "—"}</Typography>
      </Paper>
      <Button variant="contained" onClick={() => navigate(-1)}>⬅ VOLVER</Button>
    </Box>
  );
}
