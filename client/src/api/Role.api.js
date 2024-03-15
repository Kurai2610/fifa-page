import axios from "axios";

const RoleApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/role/",
});

export const getAllRole = () => RoleApi.get("/");
export const getRole = async (id) => {
  try {
    const response = await RoleApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in getRole", error);
    throw error;
  }
};
export const createRole = (data) => RoleApi.post("/", data);
export const deleteRole = (id) => RoleApi.delete(`/${id}/`);
export const updateRole = (id, data) => RoleApi.put(`/${id}/`, data);
