import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MedicCard from "../../components/MedicCard";
import "./vyhledavac.css";

const getMedicaments = async () => {
  const response = await fetch("/api/medicaments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Vyhledavac = () => {
  //{
  const { data, isLoading } = useQuery("medicaments", getMedicaments);

  /*const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(query.data.data);
  }, []);

  useEffect(() => {
    if (data === null || data === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data]);
  }*/

  //const [data, setData] = useState([]);

  const [filteredName, setFilteredName] = useState("");

  /*useEffect(() => {
    fetch(
      "/api/medicaments"
    ) /*http://localhost:1337/api/medicaments   /api/medicaments
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);*/

  const handleChange = (e) => {
    setFilteredName(e.target.value);
  };

  return (
    <div className="vyhledavac-container">
      <div className="searchBox">
        <input
          type="text"
          placeholder="hledat"
          onChange={handleChange}
          className="searchBox__input"
          value={filteredName}
        ></input>
      </div>

      <div className="cards-container">
        {isLoading && <p>Loading...</p>}
        {data &&
          data.data
            .filter((el) =>
              el.attributes.name
                .toLowerCase()
                .includes(filteredName.toLocaleLowerCase())
            )
            .map((medicament) => (
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
