import axios from "axios";

const InfoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/info/",
});

export const getAllInfo = () => InfoApi.get("/");
export const getInfo = (id) => InfoApi.get(`/${id}`);
export const createInfo = (info) => InfoApi.post("/", info);
export const deleteInfo = (id) => InfoApi.delete(`/${id}`);
export const updateInfo = (id, data) => InfoApi.put(`/${id}/`, data);
