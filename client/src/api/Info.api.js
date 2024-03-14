import axios from "axios";
import { getNationality } from "./Nationalities.api";

const InfoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/info/",
});

export const getAllInfo = () => InfoApi.get("/");
export const getInfo = async (id) => {
  try {
    const response = await InfoApi.get(`/${id}`);
    const infoData = response.data;

    const nationalityResponse = await getNationality(infoData.nationality_id);

    return {
      ...infoData,
      nationality: nationalityResponse.data.name,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const createInfo = (info) => InfoApi.post("/", info);
export const deleteInfo = (id) => InfoApi.delete(`/${id}`);
export const updateInfo = (id, data) => InfoApi.put(`/${id}/`, data);
