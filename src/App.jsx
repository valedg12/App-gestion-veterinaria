import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ClientesPage from "./pages/Clientes/ClientesPage";
import ClienteDetalle from "./pages/Clientes/ClienteDetalle";
import ClienteForm from "./pages/Clientes/ClienteForm";

import MascotasPage from "./pages/Mascotas/MascotasPage";
import MascotaDetalle from "./pages/Mascotas/MascotaDetalle";
import MascotaForm from "./pages/Mascotas/MascotaForm";

import { ColorModeProvider } from "./context/ColorModeContext";
import { NotificationProvider } from "./context/NotificationContext";
import "./styles/globals.css";

export default function App() {
  return (
    <ColorModeProvider>
      <NotificationProvider>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Clientes */}
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes/nuevo" element={<ClienteForm />} />
          <Route path="/clientes/editar/:id" element={<ClienteForm />} />
          <Route path="/clientes/:id" element={<ClienteDetalle />} />

          {/* Mascotas */}
          <Route path="/mascotas" element={<MascotasPage />} />
          <Route path="/mascotas/nuevo" element={<MascotaForm />} />
          <Route path="/mascotas/editar/:id" element={<MascotaForm />} />
          <Route path="/mascotas/:id" element={<MascotaDetalle />} />
        </Routes>
      </NotificationProvider>
    </ColorModeProvider>
  );
}
