import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMascotas, eliminarMascota } from "../../services/apiMascotas";
import { useNotification } from "../../context/NotificationContext";
import "../../styles/tableStyles.css";

export default function MascotasPage() {
  const [mascotas, setMascotas] = useState([]);
  const [search, setSearch] = useState("");
  const { showNotification } = useNotification();

  useEffect(() => {
    cargarMascotas();
  }, []);

  const cargarMascotas = async () => {
    try {
      const data = await getMascotas();
      setMascotas(data);
    } catch (error) {
      showNotification("Error cargando mascotas", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta mascota?")) return;
    try {
      await eliminarMascota(id);
      showNotification("Mascota eliminada", "success");
      cargarMascotas();
    } catch (error) {
      showNotification("Error eliminando mascota", "error");
    }
  };

  const mascotasFiltradas = mascotas.filter((m) =>
    m.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Mascotas</h2>

      <div className="top-bar">
        <Link to="/mascotas/nueva" className="btn-primary">
          + NUEVA MASCOTA
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
              <th>Nombre</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Edad</th>
              <th>Cliente</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {mascotasFiltradas.map((mascota) => (
              <tr key={mascota._id}>
                <td>{mascota.nombre}</td>
                <td>{mascota.especie}</td>
                <td>{mascota.raza}</td>
                <td>{mascota.edad}</td>

                {/* Cliente clickeable o guion */}
                <td>
                  {mascota.cliente ? (
                    <Link
                      to={`/clientes/${mascota.cliente._id}`}
                      className="cliente-link"
                    >
                      {mascota.cliente.nombre}
                    </Link>
                  ) : (
                    "—"
                  )}
                </td>

                {/* Botones */}
                <td className="acciones">
                  <Link className="btn ver" to={`/mascotas/${mascota._id}`}>
                    VER
                  </Link>
                  <Link className="btn editar" to={`/mascotas/editar/${mascota._id}`}>
                    EDITAR
                  </Link>
                  <button
                    className="btn eliminar"
                    onClick={() => handleDelete(mascota._id)}
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
