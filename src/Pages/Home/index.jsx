import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import psychoGraf from "./psycho.svg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="header-h1">Dobro</h1>

      {/* box info + statistiky */}
      <div className="infostatsbox">
        {/* info */}
        <div className="info">
          <h2 className="header-h2 header-h2--info">Info:</h2>
          <p className="p--info p--info__p1">
            Zneužívání léků na předpis je podceňovaný, avšak rozšířený problém.
            Vede k závislosti, která je stejně závažná jako závislost na
            alkoholu nebo nelegálních psychotropních látkách.{" "}
          </p>
          <p className="p--info p--info__p2">
            Předávkování benzodiazepiny vede k ospalosti až kóma. Ročně je
            hospitalizováno cca 150–200 osob pro úraz pod vlivem psychoaktivních
            léků.
          </p>
        </div>

        {/* statistiky */}
        <div className="stats">
          {/*<h2 className="header-h2 header-h2--stats">Statistiky:</h2>*/}
          <p className="p--stats p--stats__p1">
            Při extrapolaci na celou populaci ČR ve věku 15+ let je celkem 1,35
            mil. osob vykazujících známky problémového užívání psychoaktivních
            léků, z toho: <span className="p--stats__p1__star star">&#42;</span>
          </p>
          <img src={psychoGraf} className="stats__img stats--psychograf" />
          <p className="p--stats p--stats__p2">
            <span className="p--stats__p2__star star">&#42;</span>zdroj: Zpráva
            o problematickém užívání psychoaktivních léků v České republice 2021
            [Report on Problematic Psychoactive Medicines Use in the Czech
            Republic 2021] MRAVČÍK, V. (Ed.). Praha: Úřad vlády České republiky
          </p>
        </div>
      </div>

      {/* upozornění */}
      <div className="alert">
        <p className="p--alert p--alert__p1">
          Ačkoliv je zneužívání léčiv seriózní problém, srovnatelný s užíváním a
          závislostí na jiných legálních i nelegálních drogách, k jeho řešení se
          dosud seriózně nepřistoupilo. Tolerance veřejnosti k lékům je
          všeobecně vysoká, přičemž i sami lékaři mají tendenci řešit každou
          potíž "pilulkou". Užívání léků na předpis se často prodlužuje nad míru
          nutnou a především doporučenou, a to i přes vysoké riziko vzniku
          závislosti. Léky jsou poměrně snadno dostupné na internetu a tak
          abúzus je daleko snadnější než u drog nelegálních, ačkoliv následky
          zneužívání léčiv jsou v podstatě stejně závažné.
        </p>
        <p className="p--alert p--alert__p2">
          I když se zneužívání léků začíná věnovat pozornost, prevence zatím
          nestojí za moc. Máte pocit, že se vám užívání léků vymklo kontrole?
          Máte obavy o někoho blízkého? Pokračujte chatbotem. Nebo kontaktujte
          nejbližší centrum pomoci, poradenství a prevence v oblasti závislostí.
        </p>
      </div>

      {/* button kontakty */}
      {/* HTML ver.:
      <p className="p--btn p--btn__kontakty">
        <a href="kontakty.jsx" className="a--btn a--btn__kontakty">
          btn proklik kontakty
        </a>
      </p>
      
      */}

      <div className="btn--kontakty">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="inherit"
            component={Link}
            to="/kontakty"
          >
            Kontakty
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Home;
