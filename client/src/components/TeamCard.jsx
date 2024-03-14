import { useNavigate } from "react-router-dom";

export function TeamCard({ team }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-800"
      style={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
      onClick={() => {
        navigate(`/teams/${team.id}`);
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={team.flag}
          alt="Flag"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          background: "#fff",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginTop: "-40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={team.shield}
          alt="Shield"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />
      </div>
      <span style={{ marginTop: "10px" }}>{team.name}</span>
      <hr style={{ margin: "10px 0" }} />
    </div>
  );
}
