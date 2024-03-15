import axios from "axios";
const AuthApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const registerUser = async (userData) => {
  try {
    const response = await AuthApi.post("/register/", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await AuthApi.post("/login/", userData);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
