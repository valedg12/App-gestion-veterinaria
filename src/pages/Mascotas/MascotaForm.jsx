import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMascota, updateMascota, getMascotaById } from "../../services/apiMascotas";
import { getClientes } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";
import "../../styles/tableStyles.css";

export default function MascotaForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { notify } = useNotification();

  const [form, setForm] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    cliente: "",
  });

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientesData = await getClientes();
        setClientes(clientesData);

        if (isEdit) {
          const mascotaData = await getMascotaById(id);
          setForm({
            nombre: mascotaData.nombre || "",
            especie: mascotaData.especie || "",
            raza: mascotaData.raza || "",
            edad: mascotaData.edad || "",
            cliente: mascotaData?.cliente?._id || "",
          });
        }
      } catch (error) {
        notify("Error cargando datos", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateMascota(id, form);
        notify("Mascota actualizada con éxito ✅", "success");
      } else {
        await createMascota(form);
        notify("Mascota creada con éxito 🐾", "success");
      }
      navigate("/mascotas");
    } catch (error) {
      notify("Error al guardar la mascota ❌", "error");
    }
  };

  if (loading) return <div className="empty">Cargando datos...</div>;

  return (
    <div className="page">
      <div className="page-header">
        <h2>{isEdit ? "Editar Mascota" : "Nueva Mascota"}</h2>
      </div>

      <div className="card form-card">
        <form onSubmit={handleSubmit} className="form-grid">
          <input
            className="input"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="especie"
            placeholder="Especie"
            value={form.especie}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="raza"
            placeholder="Raza"
            value={form.raza}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="edad"
            type="number"
            placeholder="Edad"
            value={form.edad}
            onChange={handleChange}
          />

          <select
            className="input"
            name="cliente"
            value={form.cliente}
            onChange={handleChange}
          >
            <option value="">Sin asignar</option>
            {clientes.map((c) => (
              <option key={c._id} value={c._id}>
                {c.nombre}
              </option>
            ))}
          </select>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              {isEdit ? "Guardar Cambios" : "Crear Mascota"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/mascotas")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
