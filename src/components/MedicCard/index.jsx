import React from "react";
import "./mediccard.css";

const MedicCard = ({
  name,
  description,
  substance,
  effect,
  wean,
  category,
}) => {
  return (
    <div className="mediccard--container">
      <div className="mediccard--content">
        <h3 className="mediccard--content__header header3">{name}</h3>
        <p className="mediccard--content__p description">{description}</p>
        <p className="mediccard--content__p substance">
          <span className="mediccard--content__p-span">účinná látka: </span>
          {substance}
        </p>
        <p className="mediccard--content__p effect">
          <span className="mediccard--content__p-span">účinky: </span>
          {effect}
        </p>
        <p className="mediccard--content__p wean">
          <span className="mediccard--content__p-span">
            riziko závislosti:{" "}
          </span>
          {wean}
        </p>
        <p className="mediccard--content__p category">{category}</p>
      </div>
    </div>
  );
};

export default MedicCard;
