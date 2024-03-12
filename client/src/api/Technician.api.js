import axios from "axios";

const TechnicianApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/technician/",
});

export const getAllTechnician = () => TechnicianApi.get("/");
export const getTechnician = (id) => TechnicianApi.get(`/${id}`);
export const createTechnician = (data) => TechnicianApi.post("/", data);
export const updateTechnician = (id, data) =>
  TechnicianApi.put(`/${id}/`, data);
export const deleteTechnician = (id) => TechnicianApi.delete(`/${id}`);
