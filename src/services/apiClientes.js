import api from "./axiosConfig";

export const getClientes = async () => {
  const { data } = await api.get("/clientes");
  return data;
};

export const getClienteById = async (id) => {
  const { data } = await api.get(`/clientes/${id}`);
  return data;
};

export const createCliente = async (cliente) => {
  const { data } = await api.post("/clientes", cliente);
  return data;
};

export const updateCliente = async (id, clienteActualizado) => {
  const { data } = await api.put(`/clientes/${id}`, clienteActualizado);
  return data;
};

export const deleteCliente = async (id) => {
  const { data } = await api.delete(`/clientes/${id}`);
  return data;
};
