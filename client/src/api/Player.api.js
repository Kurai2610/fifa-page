import axios from "axios";

const PlayerApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getAllPlayers = async () => {
  try {
    const playerResponse = await PlayerApi.get(`player/${id}`);
    const playerData = playerResponse.data;

    const teamResponse = await PlayerApi.get(`team/${playerData.team_id}`);
    const teamData = teamResponse.data;

    const positionResponse = await PlayerApi.get(
      `position/${playerData.position_id}`
    );
    const positionData = positionResponse.data;

    const infoResponse = await PlayerApi.get(`info/${playerData.info_id}`);
    const infoData = infoResponse.data;

    return {
      player: playerData,
      team: teamData,
      position: positionData,
      info: infoData,
    };
  } catch (error) {
    console.error("Error retrieving player data:", error);
    throw error;
  }
};

export const getPlayer = (id) => PlayerApi.get(`player/${id}`);
export const createPlayer = (data) => PlayerApi.post("player/", data);
export const deletePlayer = (id) => PlayerApi.delete(`player/${id}`);
export const updatePlayer = (id, data) => PlayerApi.put(`player/${id}/`, data);