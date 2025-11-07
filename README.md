# 🐾 Sistema de Gestión Veterinaria

Aplicación full-stack desarrollada como proyecto integrador, que permite administrar **clientes y mascotas** de una veterinaria.  
Incluye frontend en **React + Vite**, backend en **Node.js + Express + MongoDB**, y consumo de API real sin mocks.

---

## 🚀 Tecnologías utilizadas

| Área | Tecnologías |
|------|-------------|
| **Frontend** | React + Vite, React Router DOM, Axios, Material UI (MUI), DataGrid, Hooks (useState, useEffect, useCallback, memo) |
| **Backend** | Node.js, Express, Mongoose, MongoDB Atlas |
| **Extras** | Dark / Light Mode, Responsive Design, Fetch real de API, Validaciones, Notificaciones |

---

## ✅ Funcionalidades

### 👥 Módulo Clientes
✔️ Listado con DataGrid  
✔️ Crear / Editar / Eliminar clientes  
✔️ Ver detalle individual  
✔️ Búsqueda en tiempo real  

### 🐶 Módulo Mascotas
✔️ Listado con DataGrid  
✔️ Crear / Editar / Eliminar mascotas  
✔️ Relación mascota → cliente  
✔️ Búsqueda y filtros  

### 🌓 Tema visual
✔️ Modo Claro / Oscuro con persistencia

### 📱 Responsive
✔️ Desktop + Tablets + Mobile  
✔️ Navbar adaptativa

---

## 📂 Estructura del proyecto
```plaintext
src
├── components
│   ├── Loader.jsx
│   └── Navbar.jsx
├── context
│   ├── ColorModeContext.jsx
│   └── NotificationContext.jsx
├── hooks
│   ├── useFetch.js
│   └── useIsMobile.js
├── pages
│   ├── Home.jsx
│   ├── Clientes
│   │   ├── ClientesPage.jsx
│   │   ├── ClienteDetalle.jsx
│   │   └── ClienteForm.jsx
│   └── Mascotas
│       ├── MascotasPage.jsx
│       ├── MascotaDetalle.jsx
│       └── MascotaForm.jsx
├── services
│   ├── apiClientes.js
│   └── apiMascotas.js
├── styles
│   ├── globals.css
│   └── theme.js
├── App.jsx
├── main.jsx
└── vite.config.js

## ✅ Funcionalidades principales

✔ CRUD de Clientes  
✔ CRUD de Mascotas  
✔ Relación Cliente ↔ Mascota  
✔ Filtros y búsquedas en tablas  
✔ Modo **Dark / Light**  
✔ Diseño responsive (Desktop, Tablet, Mobile)  
✔ Notificaciones globales (MUI Snackbar)  
✔ Hooks optimizados (`useCallback`, `useMemo`, `useFetch`)  

---

## 📦 Instalación y ejecución

### 1️⃣ Clonar el repositorio

`` git clone https://github.com/valedg12/App-gestion-veterinaria.git `` 

`` cd App-gestion-veterinaria `` 

### 2️⃣ Instalar dependencias

`` npm install `` 

### 3️⃣ Ejecutar el proyecto

`` npm run dev `` 

