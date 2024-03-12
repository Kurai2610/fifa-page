import axios from "axios";

const NationalityApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/nationality/",
});

export const getAllNationalities = () => NationalityApi.get("/");

export const getNationality = (id) => NationalityApi.get(`/${id}/`);

export const createNationality = (nationality) =>
  NationalityApi.post("/", nationality);

export const deleteNationality = (id) => NationalityApi.delete(`/${id}`);

export const updateNationality = (id, data) =>
  NationalityApi.put(`/${id}/`, data);
