import axios from "axios";

const PositionApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/position/",
});

export const getAllPositions = () => PositionApi.get("/");
export const getPosition = (id) => PositionApi.get(`/${id}`);
export const createPosition = (data) => PositionApi.post("/", data);
export const deletePosition = (id) => PositionApi.delete(`/${id}`);
export const updatePosition = (id, data) => PositionApi.put(`/${id}/`, data);
