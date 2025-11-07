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

<img width="1903" height="833" alt="image" src="https://github.com/user-attachments/assets/81e4db5b-3d5e-45cb-aad8-d8e87c11cd99" />



## Clientes 

<img width="1907" height="828" alt="image" src="https://github.com/user-attachments/assets/e23f88d3-66fe-4107-ae7d-56fc9b5dc50e" />



## Mascotas

<img width="1919" height="818" alt="image" src="https://github.com/user-attachments/assets/a920366d-9379-4ac7-886d-fa86ce1ddbbb" />



## Modo Dark

<img width="1913" height="798" alt="image" src="https://github.com/user-attachments/assets/43febaf9-cf50-488a-a591-ad041fc45998" />



## Vista Mobile

<img width="743" height="769" alt="image" src="https://github.com/user-attachments/assets/d1d5ee53-29df-4f9a-bc7d-d670d03cd948" />



---

## Backend relacionado

`` https://api-veterinaria-orcin.vercel.app/api `` 
`` https://github.com/valedg12/api_veterinaria  `` 
