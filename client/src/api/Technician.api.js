import axios from "axios";
import { getInfo } from "./Info.api";
import { getRole } from "./Role.api";

const TechnicianApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getAllTechnician = () => TechnicianApi.get("technician/");
export const getTechnician = async (id) => {
  try {
    const response = await TechnicianApi.get(`technician/${id}`);
    const technicianData = response.data;

    const infoResponse = await getInfo(technicianData.info_id);
    const roleResponse = await getRole(technicianData.role_id);

    return {
      ...technicianData,
      info: infoResponse,
      role: roleResponse.name,
    };
  } catch (error) {
    console.error("Error in getTechnician", error);
    throw error;
  }
};
export const createTechnician = (data) =>
  TechnicianApi.post("technician/", data);
export const updateTechnician = (id, data) =>
  TechnicianApi.put(`/${id}/`, data);
export const deleteTechnician = (id) =>
  TechnicianApi.delete(`technician/${id}`);
