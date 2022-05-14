import React, { useState } from "react";
import { useQuery } from "react-query";
import "./kontakty.css";
import { getMedicalFacilities } from "../../queries/kontakty";
import Loader from "../../components/Loader";

import doodle from "./LovingDoodle.svg";

const myApi = "DmzCgfsbqUwKBwUfe57y1v24tXkXDG81htWBc5qh";

const Kontakty = () => {
  const [kraj, setKraj] = useState("");
  const { data, isLoading } = useQuery(
    "medicalFacilities",
    getMedicalFacilities
  );

  return (
    <div className="kontakty-container">
      <div className="kontakty-adikt">
        <h2 className="kontakty-adikt__header">Adiktologická centra v ČR</h2>
        <div className="kontakty-kraje">
          <p
            className="kontakty-kraje__p p--vse"
            id=""
            onClick={() => setKraj("")}
          >
            Vše
          </p>
          <p
            className="kontakty-kraje__p p--praha"
            id="CZ010"
            onClick={() => setKraj("CZ010")}
          >
            Hlavní město Praha
          </p>
          <p
            className="kontakty-kraje__p p--stredocesky"
            id="CZ020"
            onClick={() => setKraj("CZ020")}
          >
            Středočeský kraj
          </p>
          <p
            className="kontakty-kraje__p p--jihocesky"
            id="CZ031"
            onClick={() => setKraj("CZ031")}
          >
            Jihočeský kraj
          </p>
          <p
            className="kontakty-kraje__p p--plzensky"
            id="CZ032"
            onClick={() => setKraj("CZ032")}
          >
            Plzeňský kraj
          </p>
          <p
            className="kontakty-kraje__p p--karlovarsky"
            id="CZ041"
            onClick={() => setKraj("CZ041")}
          >
            Karlovarský kraj
          </p>
          <p
            className="kontakty-kraje__p p--ustecky"
            id="CZ042"
            onClick={() => setKraj("CZ042")}
          >
            Ústecký kraj
          </p>
          <p
            className="kontakty-kraje__p p--liberecky"
            id="CZ051"
            onClick={() => setKraj("CZ051")}
          >
            Liberecký kraj
          </p>
          <p
            className="kontakty-kraje__p p--kralovehradecky"
            id="CZ052"
            onClick={() => setKraj("CZ052")}
          >
            Královéhradecký kraj
          </p>
          <p
            className="kontakty-kraje__p p--pardubicky"
            id="CZ053"
            onClick={() => setKraj("CZ053")}
          >
            Pardubický kraj
          </p>
          <p
            className="kontakty-kraje__p p--vysocina"
            id="CZ063"
            onClick={() => setKraj("CZ063")}
          >
            Kraj Vysočina
          </p>
          <p
            className="kontakty-kraje__p p--jihomoravsky"
            id="CZ064"
            onClick={() => setKraj("CZ064")}
          >
            Jihomoravský kraj
          </p>
          <p
            className="kontakty-kraje__p p--zlinsky"
            id="CZ072"
            onClick={() => setKraj("CZ072")}
          >
            Zlínský kraj
          </p>
          <p
            className="kontakty-kraje__p p--olomoucky"
            id="CZ071"
            onClick={() => setKraj("CZ071")}
          >
            Olomoucký kraj
          </p>
          <p
            className="kontakty-kraje__p p--moravskoslezsky"
            id="CZ080"
            onClick={() => setKraj("CZ080")}
          >
            Moravskoslezský kraj
          </p>
        </div>
        <div className="kontakty-results">
          {/*{isLoading && <p>Loading...</p>}*/}
          {isLoading && <Loader />}
          {data &&
            data.data
              .filter((el) => el.attributes.KrajCode.includes(kraj))
              .map((medFac) => (
                <div className="kontakty-results__card">
                  <h3 className="kontakty-results__card__h3">
                    {medFac.attributes.NazevZarizeni}
                  </h3>
                  <p className="kontakty-results__card__p druhZarizeni">
                    {medFac.attributes.DruhZarizeni}
                  </p>

                  <p className="kontakty-results__card__p adresa">
                    {medFac.attributes.Ulice}{" "}
                    {medFac.attributes.CisloDomovniOrientacni},{" "}
                    {medFac.attributes.Obec}
                  </p>
                  <p className="kontakty-results__card__p telefon">
                    tel: {medFac.attributes.PoskytovatelTelefon}
                  </p>
                  <p className="kontakty-results__card__p email">
                    email: {medFac.attributes.PoskytovatelEmail}
                  </p>
                  <p className="kontakty-results__card__p web">
                    web:{" "}
                    <a
                      href={medFac.attributes.PoskytovatelWeb}
                      target="_blank"
                      className="kontakty-results__card__a web--a"
                    >
                      {medFac.attributes.PoskytovatelWeb}
                    </a>
                  </p>
                </div>
              ))}
        </div>
      </div>
      <div className="kontakty-linky">
        <h2 className="kontakty-linky__header">Linky pomoci</h2>
        <p className="kontakty-linky__p kontakty-linky__p1">
          Národní linka pro odvykání
        </p>
        <p className="kontakty-linky__p kontakty-linky__p2">tel: 800 350 000</p>
        <p className="kontakty-linky__p kontakty-linky__p3">
          web:{" "}
          <a href="www.chciodvykat.cz" className="kontakty-linky__p3--a">
            www.chciodvykat.cz
          </a>
        </p>

        <p className="kontakty-linky__p kontakty-linky__p4">
          Benzodiazepinová poradna
        </p>
        <p className="kontakty-linky__p kontakty-linky__p5">online</p>
        <p className="kontakty-linky__p kontakty-linky__p6">
          web:{" "}
          <a href="www.benzo.cz" className="kontakty-linky__p6--a">
            www.benzo.cz
          </a>
        </p>
        <img src={doodle} className="lovingDoodle" />
      </div>
    </div>
  );
};

export default Kontakty;
