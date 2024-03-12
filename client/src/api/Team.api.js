import axios from "axios";

const TeamApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/team/",
});

export const getAllTeam = () => TeamApi.get("/");
export const getTeam = (id) => TeamApi.get(`/${id}`);
export const createTeam = (data) => TeamApi.post("/", data);
export const updateTeam = (id, data) => TeamApi.put(`/${id}/`, data);
export const deleteTeam = (id) => TeamApi.delete(`/${id}`);
