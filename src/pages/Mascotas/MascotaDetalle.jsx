import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMascotaById } from "../../services/apiMascotas";
import "../../styles/tableStyles.css";

export default function MascotaDetalle() {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    getMascotaById(id).then(setMascota);
  }, [id]);

  if (!mascota) return <div className="empty">Cargando…</div>;

  return (
    <div className="page">
      <div className="page-header">
        <h2>Detalle de Mascota</h2>
      </div>

      <div className="card detail-card">
        <p><strong>Nombre:</strong> {mascota.nombre}</p>
        <p><strong>Especie:</strong> {mascota.especie}</p>
        <p><strong>Raza:</strong> {mascota.raza}</p>
        <p><strong>Edad:</strong> {mascota.edad}</p>
        <p><strong>Cliente:</strong> {mascota?.cliente?.nombre ?? "—"}</p>

        <Link to={`/mascotas/editar/${mascota._id}`} className="btn btn-primary">Editar</Link>
        <Link to="/mascotas" className="btn btn-secondary">Volver</Link>
      </div>
    </div>
  );
}
