import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button } from "@mui/material";
import { getMascotaById } from "../../services/apiMascotas";
import Loader from "../../components/Loader";

export default function MascotaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMascotaById(id)
      .then(setMascota)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Detalle de la Mascota</Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography><b>Nombre:</b> {mascota?.nombre}</Typography>
        <Typography><b>Especie:</b> {mascota?.especie}</Typography>
        <Typography><b>Raza:</b> {mascota?.raza || "—"}</Typography>
        <Typography><b>Edad:</b> {mascota?.edad ?? "—"}</Typography>
        <Typography><b>Cliente:</b> {mascota?.cliente?.nombre || mascota?.cliente_id?.nombre || "—"}</Typography>
      </Paper>
      <Button variant="contained" onClick={() => navigate(-1)}>⬅ VOLVER</Button>
    </Box>
  );
}
