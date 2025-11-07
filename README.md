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

<img width="1918" height="838" alt="image" src="https://github.com/user-attachments/assets/e489face-641c-42d8-84c7-41ba9eff14c2" />


## Clientes 

<img width="1916" height="839" alt="image" src="https://github.com/user-attachments/assets/340bd9d7-ea83-4a5f-9ada-c378fffa9869" />


## Mascotas

<img width="1919" height="834" alt="image" src="https://github.com/user-attachments/assets/40e2ab97-238b-47b1-a799-7b21b9dd9664" />


## Modo Dark

<img width="1915" height="870" alt="image" src="https://github.com/user-attachments/assets/e92f9b48-3ad8-46f1-b47e-52539bb85971" />


## Vista Mobile

<img width="728" height="761" alt="image" src="https://github.com/user-attachments/assets/7262dd40-1456-4a84-a34c-891e45971561" />


---

## Backend relacionado

`` https://api-veterinaria-orcin.vercel.app/api `` 
`` https://github.com/valedg12/api_veterinaria  `` 