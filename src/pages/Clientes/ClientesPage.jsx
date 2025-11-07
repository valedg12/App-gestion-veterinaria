import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Paper, Button, Typography, Box, TextField, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getClientes, deleteCliente } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const { showNotification } = useNotification();
  const isMobile = useIsMobile();

  useEffect(() => {
    getClientes()
      .then(setClientes)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = useCallback(async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      await deleteCliente(id);
      setClientes((prev) => prev.filter((c) => c._id !== id));
      showNotification("Cliente eliminado", "success");
    } catch (err) {
      showNotification("Error eliminando cliente", "error");
    }
  }, [showNotification]);

  const rows = useMemo(() => {
    return (clientes || [])
      .filter((c) =>
        [c?.nombre, c?.email, c?.telefono]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((c, i) => ({ id: c._id ?? i, ...c }));
  }, [clientes, search]);

  const columns = useMemo(() => {
    const baseCols = [
      { field: "nombre", headerName: "Nombre", flex: 1 },
      { field: "email", headerName: "Email", flex: 1 },
      { field: "telefono", headerName: "Teléfono", flex: 1 },
    ];

    const actionCol = {
      field: "acciones",
      headerName: "Acciones",
      sortable: false,
      flex: 1,
      renderCell: ({ row }) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" component={Link} to={`/clientes/${row._id}`}>Ver</Button>
          {!isMobile && (
            <Button variant="contained" component={Link} to={`/clientes/editar/${row._id}`}>Editar</Button>
          )}
          {!isMobile && (
            <Button color="error" variant="outlined" onClick={() => handleDelete(row._id)}>Eliminar</Button>
          )}
        </Box>
      ),
    };

    return isMobile ? [...baseCols.slice(0, 1), actionCol] : [...baseCols, actionCol];
  }, [isMobile, handleDelete]);

  if (loading) return <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}><CircularProgress /></Box>;
  if (error) return <Box sx={{ p: 3 }}><Alert severity="error">❌ Error cargando clientes: {error.message}</Alert></Box>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Clientes</Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="contained" component={Link} to="/clientes/nuevo">➕ Nuevo Cliente</Button>
        <TextField label="Buscar" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ minWidth: 260 }} />
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
