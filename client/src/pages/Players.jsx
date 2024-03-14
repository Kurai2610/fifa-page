import { PlayerList } from "../components/PlayerList";

export function Players() {
  return (
    <div className="container mx-auto text-center mt-5">
      <h1 className="text-4xl font-bold mb-4">Jugadores</h1>
      <hr />
      <div className="mt-8">
        <PlayerList />
      </div>
    </div>
  );
}
