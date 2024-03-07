import { useEffect, useState } from "react";
import { getAllNationalities } from "../api/Nationalities.api";
import { NationalityCard } from "./NationalityCard";

export function NationalitiesList() {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    async function loadNationalities() {
      const res = await getAllNationalities();
      setNationalities(res.data);
    }

    loadNationalities();
  }, []);

  return (
    <div>
      <ul>
        {nationalities.map((nationality) => (
          <NationalityCard key={nationality.id} nationality={nationality} />
        ))}
      </ul>
    </div>
  );
}
