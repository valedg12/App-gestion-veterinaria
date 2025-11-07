
import axios from "./axiosConfig.js";

export const getMascotas = async () => {
  const { data } = await axios.get("/mascotas");
  return data; 
};

export const getMascotaById = async (id) => {
  const { data } = await axios.get(`/mascotas/${id}`);
  return data; 
};

export const createMascota = async (mascota) => {
  const { data } = await axios.post("/mascotas", mascota);
  return data;
};

export const updateMascota = async (id, mascota) => {
  const { data } = await axios.put(`/mascotas/${id}`, mascota);
  return data;
};

export const deleteMascota = async (id) => {
  const { data } = await axios.delete(`/mascotas/${id}`);
  return data;
};
