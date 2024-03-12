import axios from "axios";

const RoleApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/role/",
});

export const getAllRole = () => RoleApi.get("/");
export const getRole = (id) => RoleApi.get(`/${id}/`);
export const createRole = (data) => RoleApi.post("/", data);
export const deleteRole = (id) => RoleApi.delete(`/${id}/`);
export const updateRole = (id, data) => RoleApi.put(`/${id}/`, data);
