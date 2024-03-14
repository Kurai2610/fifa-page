import { getAllTeam } from "../api/Team.api";
import { useEffect, useState } from "react";
import { TeamCard } from "./TeamCard";

export function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      const res = await getAllTeam();
      setTeams(res.data);
    }

    loadTeams();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {teams.map((team) => (
        <div key={team.id} className="col-span-1">
          <TeamCard team={team} />
        </div>
      ))}
    </div>
  );
}
