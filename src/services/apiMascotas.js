import api from "./axiosConfig";

export const getMascotas = async () => {
  const { data } = await api.get("/mascotas");
  return data;
};

export const getMascotaById = async (id) => {
  const { data } = await api.get(`/mascotas/${id}`);
  return data;
};

export const createMascota = async (mascota) => {
  const { data } = await api.post("/mascotas", mascota);
  return data;
};

export const updateMascota = async (id, mascotaActualizada) => {
  const { data } = await api.put(`/mascotas/${id}`, mascotaActualizada);
  return data;
};

export const deleteMascota = async (id) => {
  const { data } = await api.delete(`/mascotas/${id}`);
  return data;
};
