import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClientes, eliminarCliente } from "../../services/apiClientes";
import { useNotification } from "../../context/NotificationContext";
import "../../styles/tableStyles.css";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState("");
  const { showNotification } = useNotification();

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      const data = await getClientes();
      setClientes(data);
    } catch (error) {
      showNotification("Error cargando clientes", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      await eliminarCliente(id);
      showNotification("Cliente eliminado", "success");
      cargarClientes();
    } catch (error) {
      showNotification("Error eliminando cliente", "error");
    }
  };

  const clientesFiltrados = clientes.filter((c) =>
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Clientes</h2>

      <div className="top-bar">
        <Link to="/clientes/nuevo" className="btn-primary">
          + NUEVO CLIENTE
        </Link>

        <input
          type="text"
          placeholder="Buscar"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente._id}>
                <td>
                  <Link
                    to={`/clientes/${cliente._id}`}
                    className="cliente-link"
                  >
                    {cliente.email}
                  </Link>
                </td>
                <td>{cliente.telefono || "—"}</td>

                <td className="acciones">
                  <Link className="btn ver" to={`/clientes/${cliente._id}`}>
                    VER
                  </Link>

                  <Link className="btn editar" to={`/clientes/editar/${cliente._id}`}>
                    EDITAR
                  </Link>

                  <button
                    className="btn eliminar"
                    onClick={() => handleDelete(cliente._id)}
                  >
                    ELIMINAR
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
