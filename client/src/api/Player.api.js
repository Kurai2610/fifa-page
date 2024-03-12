import axios from "axios";

const PlayerApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/player/",
});

export const getAllPlayers = () => PlayerApi.get("/");
export const getPlayer = (id) => PlayerApi.get(`/${id}`);
export const createPlayer = (data) => PlayerApi.post("/", data);
export const deletePlayer = (id) => PlayerApi.delete(`/${id}`);
export const updatePlayer = (id, data) => PlayerApi.put(`/${id}/`, data);
