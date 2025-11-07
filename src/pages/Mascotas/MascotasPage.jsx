import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Paper, Button, Typography, Box, TextField, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getMascotas, deleteMascota } from "../../services/apiMascotas";
import { useNotification } from "../../context/NotificationContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function MascotasPage() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const { showNotification } = useNotification();
  const isMobile = useIsMobile();

  useEffect(() => {
    getMascotas()
      .then(setMascotas)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      if (!confirm("¿Seguro que deseas eliminar esta mascota?")) return;
      try {
        await deleteMascota(id);
        setMascotas((prev) => prev.filter((m) => m._id !== id));
        showNotification("Mascota eliminada", "success");
      } catch (err) {
        showNotification("Error eliminando mascota", "error");
      }
    },
    [showNotification]
  );

  const rows = useMemo(() => {
    return (mascotas || [])
      .filter((m) =>
        [m?.nombre, m?.especie, m?.raza, m?.cliente?.nombre ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((m, i) => ({
        id: m._id ?? i,
        ...m,
        clienteNombre: m?.cliente?.nombre ?? "—",
      }));
  }, [mascotas, search]);

  const columnsDesktop = [
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "especie", headerName: "Especie", flex: 1 },
    { field: "raza", headerName: "Raza", flex: 1 },
    { field: "edad", headerName: "Edad", flex: 0.5 },
    { field: "clienteNombre", headerName: "Cliente", flex: 1 },
    {
      field: "acciones",
      headerName: "Acciones",
      sortable: false,
      flex: 1,
      renderCell: ({ row }) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" component={Link} to={`/mascotas/${row.id}`}>
            Ver
          </Button>
          <Button variant="contained" component={Link} to={`/mascotas/editar/${row.id}`}>
            Editar
          </Button>
          <Button color="error" variant="outlined" onClick={() => handleDelete(row.id)}>
            Eliminar
          </Button>
        </Box>
      ),
    },
  ];

  const columnsMobile = [
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "clienteNombre", headerName: "Cliente", flex: 1 },
    {
      field: "acciones",
      headerName: "Acciones",
      sortable: false,
      flex: 1,
      renderCell: ({ row }) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button size="small" variant="outlined" component={Link} to={`/mascotas/${row.id}`}>
            Ver
          </Button>
          <Button size="small" variant="contained" component={Link} to={`/mascotas/editar/${row.id}`}>
            Editar
          </Button>
        </Box>
      ),
    },
  ];

  const columns = isMobile ? columnsMobile : columnsDesktop;

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">❌ Error cargando mascotas: {error.message}</Alert>
      </Box>
    );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mascotas
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="contained" component={Link} to="/mascotas/nuevo">
          ➕ Nueva Mascota
        </Button>

        <TextField
          label="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 260 }}
        />
      </Box>

      <Paper sx={{ height: 520, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
