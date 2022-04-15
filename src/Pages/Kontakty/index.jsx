import React from "react";
import { useQuery } from "react-query";
import "./kontakty.css";

const myApi = "DmzCgfsbqUwKBwUfe57y1v24tXkXDG81htWBc5qh";

const getMedicalFacilities = async () => {
  const response = await fetch(`https://api.apitalks.store/zdravotni-sluzby`, {
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
  console.log(data);
  return (
    <div className="kontakty-container">
      <p>kontakty</p>
      <div className="kontakty-kraje">
        <p className="kontakty-kraje__p p--praha">Hlavní město Praha</p>
        <p className="kontakty-kraje__p p--stredocesky">Středočeský kraj</p>
        <p className="kontakty-kraje__p p--jihocesky">Jihočeský kraj</p>
        <p className="kontakty-kraje__p p--plzensky">Plzeňský kraj</p>
        <p className="kontakty-kraje__p p--karlovarsky">Karlovarský kraj</p>
        <p className="kontakty-kraje__p p--ustecky">Ústecký kraj</p>
        <p className="kontakty-kraje__p p--liberecky">Liberecký kraj</p>
        <p className="kontakty-kraje__p p--kralovehradecky">
          Královéhradecký kraj
        </p>
        <p className="kontakty-kraje__p p--pardubicky">Pardubický kraj</p>
        <p className="kontakty-kraje__p p--vysocina">Kraj Vysočina</p>
        <p className="kontakty-kraje__p p--jihomoravsky">Jihomoravský kraj</p>
        <p className="kontakty-kraje__p p--zlinsky">Zlínský kraj</p>
        <p className="kontakty-kraje__p p--olomoucky">Olomoucký kraj</p>
        <p className="kontakty-kraje__p p--moravskoslezsky">
          Moravskoslezský kraj
        </p>
      </div>
      <div className="kontakty-results">
        {isLoading && <p>Loading...</p>}
        {data &&
          data.data.map((medFac) => (
            <div className="kontakty-results__card">
              <h3 className="kontakty-results__card__h3">
                {medFac.NazevZarizeni}
              </h3>
              <p className="kontakty-results__card__p druhZarizeni">
                {medFac.DruhZarizeni}
              </p>
              <p className="kontakty-results__card__p obec">{medFac.Obec}</p>
              <p className="kontakty-results__card__p adresa">
                {medFac.Ulice} {medFac.CisloDomovniOrientacni}
              </p>
              <p className="kontakty-results__card__p telefon">
                tel: {medFac.PoskytovatelTelefon}
              </p>
              <p className="kontakty-results__card__p email">
                email: {medFac.PoskytovatelEmail}
              </p>
              <p className="kontakty-results__card__p web">
                web: {medFac.PoskytovatelWeb}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Kontakty;
