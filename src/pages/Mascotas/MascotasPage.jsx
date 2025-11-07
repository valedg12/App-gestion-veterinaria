import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMascotas, deleteMascota } from "../../services/apiMascotas";
import { useNotification } from "../../context/NotificationContext";
import "../../styles/tableStyles.css";

export default function MascotasPage() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const { notify } = useNotification();
  const navigate = useNavigate();

  const fetchMascotas = async () => {
    try {
      setLoading(true);
      const data = await getMascotas();
      setMascotas(Array.isArray(data) ? data : []);
    } catch (err) {
      notify("Error cargando mascotas", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMascotas();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return mascotas;
    return mascotas.filter((m) => {
      const clienteNombre = m?.cliente?.nombre || "";
      return (
        (m?.nombre || "").toLowerCase().includes(term) ||
        (m?.especie || "").toLowerCase().includes(term) ||
        (m?.raza || "").toLowerCase().includes(term) ||
        clienteNombre.toLowerCase().includes(term)
      );
    });
  }, [q, mascotas]);

  const onDelete = async (id) => {
    if (!confirm("¿Eliminar esta mascota?")) return;
    try {
      await deleteMascota(id);
      notify("Mascota eliminada con éxito", "success");
      setMascotas((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      notify("No se pudo eliminar la mascota", "error");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Mascotas</h2>
        <div className="page-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/mascotas/nuevo")}
          >
            + Nueva Mascota
          </button>
          <input
            className="input"
            placeholder="Buscar"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <div className="card">
        {loading ? (
          <div className="empty">Cargando…</div>
        ) : filtered.length === 0 ? (
          <div className="empty">No hay mascotas</div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Especie</th>
                  <th>Raza</th>
                  <th>Edad</th>
                  <th>Cliente</th>
                  <th className="col-actions">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m._id}>
                    <td>{m.nombre || "—"}</td>
                    <td>{m.especie || "—"}</td>
                    <td>{m.raza || "—"}</td>
                    <td>{m.edad ?? "—"}</td>
                    <td>{m?.cliente?.nombre || "—"}</td>
                    <td className="actions">
                      <Link to={`/mascotas/${m._id}`} className="btn btn-info">
                        Ver
                      </Link>
                      <Link
                        to={`/mascotas/editar/${m._id}`}
                        className="btn btn-primary"
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(m._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
