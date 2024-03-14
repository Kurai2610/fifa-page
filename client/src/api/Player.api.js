import axios from "axios";
import { getInfo } from "./Info.api";

const PlayerApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getAllPlayers = () => PlayerApi.get("player/");
export const getPlayer = async (id) => {
  try {
    const response = await PlayerApi.get(`player/${id}`);
    const playerData = response.data;

    const teamResponse = await PlayerApi.get(`team/${playerData.team_id}`);
    const positionResponse = await PlayerApi.get(
      `position/${playerData.position_id}`
    );
    const infoResponse = await getInfo(playerData.info_id);

    return {
      ...playerData,
      teamName: teamResponse.data.name,
      position: positionResponse.data.name,
      info: infoResponse,
      nationality: infoResponse.nationality,
    };
  } catch (error) {
    console.error("Error in getPlayer", error);
    throw error;
  }
};
export const createPlayer = (data) => PlayerApi.post("player/", data);
export const deletePlayer = (id) => PlayerApi.delete(`player/${id}`);
export const updatePlayer = (id, data) => PlayerApi.put(`player/${id}/`, data);
