import axios from "axios";

export const getAllNationalities = () => {
  return axios.get("http://localhost:8000/api/v1/nationality/");
};
