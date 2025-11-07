import axios from "./axiosConfig.js";


export const getClientes = async () => {
  const { data } = await axios.get("/clientes");
  return data;
};

export const getClienteById = async (id) => {
  const { data } = await axios.get(`/clientes/${id}`);
  return data;
};


export const createCliente = async (cliente) => {
  const { data } = await axios.post("/clientes", cliente);
  return data;
};

export const updateCliente = async (id, cliente) => {
  const { data } = await axios.put(`/clientes/${id}`, cliente);
  return data;
};

export const eliminarCliente = async (id) => {
  const { data } = await axios.delete(`/clientes/${id}`);
  return data;
};
