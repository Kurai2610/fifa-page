import { useEffect, useState } from "react";
import { getAllPlayers, getPlayerData } from "../api/Player.api";
import { PlayerCard } from "./PlayerCard";

export function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      const res = await getAllPlayers();
      setPlayers(res.data);
    }

    const loadPlayerData = async (playerId) => {
      const playerData = await getPlayerData(playerId);
      const updatedPlayers = players.map((p) => {
        if (p.id === playerId) {
          return { ...p, ...playerData };
        }
        return p;
      });
      setPlayers(updatedPlayers);
    };

    loadPlayers().then(() => {
      players.forEach((player) => {
        loadPlayerData(player.id);
      });
    });
  }, []);

  return (
    <div>
      <ul>
        {players.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </ul>
    </div>
  );
}
