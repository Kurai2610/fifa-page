export const PlayerCard = ({ player }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex">
      <div className="flex-grow">
        <h2 className="text-white text-xl font-bold mb-2">
          {player.info.name} {player.info.lastname}
        </h2>
        <p className="text-gray-400">
          Número de jugador: {player.player_number}
        </p>
        <p className="text-gray-400">Titular: {player.starter ? "✅" : "❌"}</p>
        <p className="text-gray-400">Equipo: {player.teamName}</p>
        <p className="text-gray-400">Posición: {player.position}</p>
        <p className="text-gray-400">Nacionalidad: {player.nationality}</p>
        <div className="flex items-center justify-between">
          {player.position === "Delantero" && (
            <span className="mr-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Delantero.png/1200px-Logo_Delantero.png"
                alt="Delantero"
                className="h-6"
              />
            </span>
          )}
          {player.position === "Portero" && (
            <span className="mr-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_Portero.png"
                alt="Portero"
                className="h-6"
              />
            </span>
          )}
          {player.position === "Defensa" && (
            <span className="mr-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Logo_Defensa.png/1280px-Logo_Defensa.png"
                alt="Defensa"
                className="h-6"
              />
            </span>
          )}
          <span className="mr-2">
            <img
              src={
                player.starter
                  ? "https://cdn-icons-png.flaticon.com/512/70/70749.png"
                  : "https://us.123rf.com/450wm/mnaufal/mnaufal1901/mnaufal190100564/116045887-icono-de-jugador-sustituto-jugadores-suplentes-del-banco-s%C3%ADmbolo-simple-del-deporte-del-estilo-del.jpg"
              }
              alt={player.starter ? "Starter" : "Substitute"}
              className="w-6 h-6"
              style={{ backgroundColor: "white" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
