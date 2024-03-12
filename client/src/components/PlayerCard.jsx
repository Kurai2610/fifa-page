import { useNavigate } from "react-router-dom";

export function PlayerCard({ player }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/nationalities/${player.id}`);
      }}
    >
      <li>{player.name}</li>
      <hr />
    </div>
  );
}
