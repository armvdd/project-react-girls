import React from "react";
import { useQuery } from "react-query";
import "./kontakty.css";

const myApi = "DmzCgfsbqUwKBwUfe57y1v24tXkXDG81htWBc5qh";

const getMedicalFacilities = async () => {
  const response = await fetch("https://api.apitalks.store/zdravotni-sluzby", {
    headers: { "x-api-key": myApi },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Kontakty = () => {
  const { data, isLoading } = useQuery(
    "medicalFacilities",
    getMedicalFacilities
  );

  return (
    <div className="kontakty-container">
      <p>kontakty</p>
      {isLoading && <p>Loading...</p>}
      {data && data.data.map((medFac) => <ul>{medFac.DruhZarizeni}</ul>)}
    </div>
  );
};

export default Kontakty;
