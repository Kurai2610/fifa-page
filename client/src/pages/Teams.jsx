import { TeamList } from "../components/TeamList";

export function Teams() {
  return (
    <div className="container mx-auto text-center mt-5">
      <h1 className="text-4xl font-bold mb-4">Equipos</h1>
      <hr />
      <div className="mt-8">
        <TeamList />
      </div>
    </div>
  );
}
