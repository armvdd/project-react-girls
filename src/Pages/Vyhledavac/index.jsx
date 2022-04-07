import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import MedicCard from "../../components/MedicCard";
import "./vyhledavac.css";

const getMedicaments = async () => {
  const response = await fetch("/api/medicaments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json && json.data
};

const Vyhledavac = () => {
  const { data, isLoading } = useQuery("medicaments", getMedicaments);
  const [filter, setFilter] = useState("")

  const filteredData = useMemo(() => {
    if (!data) {
      return []
    }
    if (!filter) {
      return data
    }
    return data.filter(el =>
      el.attributes.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [data, filter])

  return (
    <div className="vyhledavac-container">
      <div className="searchBox">
        <input
          type="text"
          placeholder="hledat"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="searchBox__input"
        ></input>
      </div>

      <div className="cards-container">
        {isLoading && <p>Loading...</p>}

        {filteredData.map((medicament) => (
          <MedicCard
            key={medicament.id}
            name={medicament.attributes.name}
            description={medicament.attributes.description}
            substance={medicament.attributes.substance}
            effect={medicament.attributes.effect}
            wean={medicament.attributes.wean}
            category={medicament.attributes.categories}
          />
        ))}

      </div>
    </div>
  );
};

export default Vyhledavac;
