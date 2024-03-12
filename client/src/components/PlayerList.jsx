import { useEffect, useState, useRef } from "react";
import { getAllPlayers, getPlayerData } from "../api/Player.api";

export function PlayerList() {
  const [players, setPlayers] = useState([]);
  const playersRef = useRef([]);

  const loadPlayerData = async (playerId) => {
    const playerData = await getPlayerData(playerId);
    setPlayers((prevPlayers) =>
      prevPlayers.map((p) => (p.id === playerId ? { ...p, ...playerData } : p))
    );
  };

  useEffect(() => {
    async function loadPlayers() {
      const res = await getAllPlayers();
      setPlayers(res.data);
      playersRef.current = res.data;
    }

    loadPlayers();
  }, []);

  useEffect(() => {
    playersRef.current.forEach((player) => {
      loadPlayerData(player.id);
    });
  }, []);

  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          <h2>{player.name}</h2>
          <p>{player.position}</p>
          <pre>{JSON.stringify(player, null, 2)}</pre>
          <hr />
        </div>
      ))}
    </div>
  );
}
