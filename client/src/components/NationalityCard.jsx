import { useNavigate } from "react-router-dom";

export function NationalityCard({ nationality }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ background: "#000", color: "#fff" }}
      onClick={() => {
        navigate(`/nationalities/${nationality.id}`);
      }}
    >
      <li>{nationality.name}</li>
      <hr />
    </div>
  );
}
