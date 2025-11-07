import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { createCliente, getClienteById, updateCliente } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";

const emptyForm = { nombre: "", email: "", telefono: "" };

export default function ClienteForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      const data = await getClienteById(id);
      setForm({ nombre: data?.nombre ?? "", email: data?.email ?? "", telefono: data?.telefono ?? "" });
    })();
  }, [id, isEdit]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }, []);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isEdit) {
        await updateCliente(id, form);
        showNotification("Cliente actualizado", "success");
      } else {
        await createCliente(form);
        showNotification("Cliente creado", "success");
      }
      navigate("/clientes");
    } catch (err) {
      showNotification("Error guardando cliente", "error");
    } finally {
      setSaving(false);
    }
  }, [form, id, isEdit, navigate, showNotification]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>{isEdit ? "Editar Cliente" : "Nuevo Cliente"}</Typography>
      <Paper component="form" onSubmit={onSubmit} sx={{ p: 3, display: "grid", gap: 2, maxWidth: 520 }}>
        <TextField label="Nombre" name="nombre" value={form.nombre} onChange={onChange} required />
        <TextField label="Email" name="email" value={form.email} onChange={onChange} required type="email" />
        <TextField label="Teléfono" name="telefono" value={form.telefono} onChange={onChange} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button type="submit" variant="contained" disabled={saving}>{isEdit ? "Guardar cambios" : "Crear"}</Button>
          <Button variant="outlined" onClick={() => navigate("/clientes")}>Cancelar</Button>
        </Box>
      </Paper>
    </Box>
  );
}
