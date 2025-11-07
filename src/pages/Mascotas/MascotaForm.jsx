import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Paper, TextField, Button, Typography, MenuItem } from "@mui/material";
import { createMascota, getMascotaById, updateMascota } from "../../services/apiMascotas";
import { getClientes } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";

const emptyForm = { nombre: "", especie: "", raza: "", edad: "", cliente_id: "" };

export default function MascotaForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes().then(setClientes);
  }, []);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      const data = await getMascotaById(id);
      setForm({
        nombre: data?.nombre ?? "",
        especie: data?.especie ?? "",
        raza: data?.raza ?? "",
        edad: data?.edad ?? "",
        cliente_id: data?.cliente_id?._id || data?.cliente_id || "",
      });
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
      const payload = { ...form, edad: Number(form.edad) || 0 };
      if (isEdit) {
        await updateMascota(id, payload);
        showNotification("Mascota actualizada", "success");
      } else {
        await createMascota(payload);
        showNotification("Mascota creada", "success");
      }
      navigate("/mascotas");
    } catch (err) {
      showNotification("Error guardando mascota", "error");
    } finally {
      setSaving(false);
    }
  }, [form, id, isEdit, navigate, showNotification]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>{isEdit ? "Editar Mascota" : "Nueva Mascota"}</Typography>

      <Paper component="form" onSubmit={onSubmit} sx={{ p: 3, display: "grid", gap: 2, maxWidth: 520 }}>
        <TextField label="Nombre" name="nombre" value={form.nombre} onChange={onChange} required />
        <TextField label="Especie" name="especie" value={form.especie} onChange={onChange} required />
        <TextField label="Raza" name="raza" value={form.raza} onChange={onChange} />
        <TextField label="Edad" name="edad" value={form.edad} onChange={onChange} type="number" inputProps={{ min: 0 }} />
        <TextField
          select
          label="Cliente"
          name="cliente_id"
          value={form.cliente_id}
          onChange={onChange}
          required
        >
          {clientes.map((c) => (
            <MenuItem key={c._id} value={c._id}>
              {c.nombre} — {c.email}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button type="submit" variant="contained" disabled={saving}>{isEdit ? "Guardar cambios" : "Crear"}</Button>
          <Button variant="outlined" onClick={() => navigate("/mascotas")}>Cancelar</Button>
        </Box>
      </Paper>
    </Box>
  );
}
