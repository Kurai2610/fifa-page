export const TechCard = ({ technician }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex">
      <div className="flex-grow">
        <h3 className="text-white text-xl font-bold mb-2">
          {technician.info.name} {technician.info.lastname}
        </h3>
        <p className="text-gray-400">{technician.info.birth_date}</p>
        <p className="text-gray-400">{technician.info.nationality}</p>
        <p className="text-gray-400">
          {technician.role === "Preparador Físico" && (
            <span>
              <span role="img" aria-label="weightlifting">
                🏋️‍♂️
              </span>{" "}
              Preparador Físico
            </span>
          )}
          {technician.role === "Médico" && (
            <span>
              <span role="img" aria-label="medical">
                ⚕️
              </span>{" "}
              Médico
            </span>
          )}
          {technician.role === "Asistente" && (
            <span>
              <span role="img" aria-label="assistant">
                🤝
              </span>{" "}
              Asistente
            </span>
          )}
          {technician.role === "Técnico" && (
            <span>
              <span role="img" aria-label="technician">
                🧑🏻‍💼
              </span>{" "}
              Técnico
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
