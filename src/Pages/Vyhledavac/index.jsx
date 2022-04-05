import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MedicCard from "../../components/MedicCard";
import "./vyhledavac.css";

/*const getMedicaments = async () => {
  const response = await fetch("/api/medicaments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};*/

const Vyhledavac = () => {
  {
    /*const query = useQuery("medicaments", getMedicaments);

  const [data, setData] = useState({});
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
  }, [data]);*/
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:1337/api/medicaments"
    ) /*http://localhost:1337/api/medicaments   /api/medicaments*/
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);

  return (
    <div className="vyhledavac-container">
      <p>vyhledávač</p>

      <div className="cards-container">
        {data ? (
          <>
            {data.map((medicament) => (
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
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
{
  /*<ul>
          {data.map((medicament) => (
            <li key={medicament.id}>{medicament.attributes.name}</li>
          ))}
          </ul> */
}
export default Vyhledavac;
