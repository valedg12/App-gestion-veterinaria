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

## 📦 Instalación y ejecución

### 1️⃣ Clonar el repositorio

`` git clone https://github.com/valedg12/App-gestion-veterinaria.git `` 

`` cd App-gestion-veterinaria `` 

### 2️⃣ Instalar dependencias

`` npm install `` 

### 3️⃣ Ejecutar el proyecto

`` npm run dev `` 

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
    ├── tableStyles.css
│   └── theme.js
├── App.jsx
├── main.jsx
└── vite.config.js

```
---

## Home

<img width="1915" height="868" alt="image" src="https://github.com/user-attachments/assets/45d6cd43-16f1-4871-9d73-80a5585a0bd1" />

## Clientes 
<img width="1917" height="854" alt="image" src="https://github.com/user-attachments/assets/0b3f59a1-7323-4a27-bd62-ee8e0b1dcd55" />

## Mascotas

<img width="1919" height="841" alt="image" src="https://github.com/user-attachments/assets/08a9f22c-1a67-4daa-8ec5-1ac88c20224b" />

## Modo Dark

<img width="1917" height="861" alt="image" src="https://github.com/user-attachments/assets/d3186703-c412-4748-bd1a-bb3e71f86c5a" />

## Vista Mobile

<img width="712" height="751" alt="image" src="https://github.com/user-attachments/assets/d9a5e5e9-9c9b-4264-a977-8e4eba90fe41" />


## Backend relacionado

`` https://api-veterinaria-orcin.vercel.app/api `` 
`` https://github.com/valedg12/api_veterinaria  `` 



