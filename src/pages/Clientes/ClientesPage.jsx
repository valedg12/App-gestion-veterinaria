
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getClientes, eliminarCliente } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";
import "../../styles/tableStyles.css";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const { notify } = useNotification();
  const navigate = useNavigate();

  const fetchClientes = async () => {
    try {
      setLoading(true);
      const list = await getClientes();
      setClientes(Array.isArray(list) ? list : []);
    } catch (err) {
      notify("Error cargando clientes", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return clientes;
    return clientes.filter((c) => {
      return (
        (c?.nombre || "").toLowerCase().includes(term) ||
        (c?.email || "").toLowerCase().includes(term) ||
        (c?.telefono || "").toLowerCase().includes(term)
      );
    });
  }, [q, clientes]);

  const onDelete = async (id) => {
    if (!confirm("¿Eliminar este cliente?")) return;
    try {
      await eliminarCliente(id);
      notify("Cliente eliminado con éxito", "success");
      setClientes((prev) => prev.filter((c) => c._id !== id));
    } catch {
      notify("No se pudo eliminar el cliente", "error");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Clientes</h2>
        <div className="page-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/clientes/nuevo")}
          >
            + Nuevo Cliente
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
          <div className="empty">No hay clientes</div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th className="col-actions">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c._id}>
                    <td>{c.nombre || "—"}</td>
                    <td>{c.email || "—"}</td>
                    <td>{c.telefono || "—"}</td>
                    <td className="actions">
                      <Link
                        to={`/clientes/${c._id}`}
                        className="btn btn-info"
                      >
                        Ver
                      </Link>
                      <Link
                        to={`/clientes/editar/${c._id}`}
                        className="btn btn-primary"
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(c._id)}
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
