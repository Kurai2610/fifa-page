import { useState, useEffect } from "react";
import { getAllPlayers, getPlayer } from "../api/Player.api";
import { PlayerCard } from "./PlayerCard";

export const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getAllPlayers();
        const playerIds = response.data.map((player) => player.id);
        const playerDataPromises = playerIds.map((id) => getPlayer(id));
        const playerData = await Promise.all(playerDataPromises);
        setPlayers(playerData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};
