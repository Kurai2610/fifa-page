import { useState, useEffect } from "react";
import { getAllTechnician, getTechnician } from "../api/Technician.api";
import { TechCard } from "./TechCard";

export const TechList = () => {
  const [technician, setTechnician] = useState([]);

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await getAllTechnician();
        const technicianIds = response.data.map((technician) => technician.id);
        const technicianDataPromises = technicianIds.map((id) =>
          getTechnician(id)
        );
        const technicianData = await Promise.all(technicianDataPromises);
        setTechnician(technicianData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchTechnician();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {console.log(technician)}
      {technician.map((technician) => (
        <TechCard key={technician.id} technician={technician} />
      ))}
    </div>
  );
};
