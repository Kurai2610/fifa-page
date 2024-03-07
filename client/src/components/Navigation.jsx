import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/home">
        <h1>Icon</h1>
      </Link>
      <Link to="/players">Players</Link>
      <Link to="/nationalities">Nationalities</Link>
    </div>
  );
}
