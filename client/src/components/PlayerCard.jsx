import { Link } from "react-router-dom";

export const PlayerCard = ({ player }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex">
      <div className="flex-grow">
        <h2 className="text-white text-xl font-bold mb-2">
          {player.info.name} {player.info.lastname}
        </h2>
        <p className="text-gray-400">Player Number: {player.player_number}</p>
        <p className="text-gray-400">
          Starter: {player.starter ? "Yes" : "No"}
        </p>
        <p className="text-gray-400">Team: {player.teamName}</p>
        <p className="text-gray-400">Position: {player.position}</p>
        <p className="text-gray-400">Nationality: {player.nationality}</p>
        <Link
          to={`/players/${player.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
      <div className="flex-shrink-0">
        {player.position === "Delantero" && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Delantero.png/1200px-Logo_Delantero.png"
            alt="Delantero"
            className="w-24 h-24"
          />
        )}
        {player.position === "Portero" && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_Portero.png"
            alt="Portero"
            className="w-24 h-24"
          />
        )}
        {player.position === "Defensa" && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Logo_Defensa.png/1280px-Logo_Defensa.png"
            alt="Defensa"
            className="w-24 h-24"
          />
        )}
      </div>
    </div>
  );
};
