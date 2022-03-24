import React from "react";
import { useQuery } from "react-query";
import "./vyhledavac.css";

const getMedicaments = async () => {
  const response = await fetch("/api/medicaments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Vyhledavac = () => {
  const query = useQuery("medicaments", getMedicaments);

  return (
    <div className="vyhledavac-container">
      <p>vyhledávač</p>
    </div>
  );
};

export default Vyhledavac;
