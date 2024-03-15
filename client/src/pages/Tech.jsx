import { TechList } from "../components/TechList";

export function Tech() {
  return (
    <div className="container mx-auto text-center mt-5">
      <h1 className="text-4xl font-bold mb-4">Técnicos</h1>
      <hr />
      <div className="mt-8">
        <TechList />
      </div>
    </div>
  );
}
