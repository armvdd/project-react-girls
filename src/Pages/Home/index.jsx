import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="header-h1">Název aplikace</h1>

      {/* box info + statistiky */}
      <div className="infostatsbox">
        {/* info */}
        <div className="info">
          <h2 className="header-h2 header-h2--info">Info:</h2>
          <p className="p--info p--info__p1">basic info, úvod</p>
        </div>

        {/* statistiky */}
        <div className="stats">
          <h2 className="header-h2 header-h2--stats">Statistiky:</h2>
          <p className="p--stats p--stats__p1">img a popisky statistik</p>
        </div>
      </div>

      {/* upozornění */}
      <div className="alert">
        <p className="p--alert p--alert__p1">
          upozornění na problém... Sugar plum bonbon dragée tart marzipan
          jelly-o shortbread soufflé. Tootsie roll dragée cake powder lollipop
          soufflé. Sweet muffin caramels brownie pie. Liquorice fruitcake ice
          cream soufflé oat cake. Jujubes pastry gummi bears soufflé oat cake.
          Tart powder jelly-o chocolate bar gingerbread carrot cake gummies
          biscuit. Chocolate candy canes chocolate bar cookie candy canes
          marzipan. Cotton candy jelly-o marshmallow sugar plum jelly-o
          macaroon. Sugar plum jujubes cupcake jelly fruitcake caramels. Dessert
          caramels pudding marzipan bonbon.
        </p>
      </div>

      {/* button kontakty */}
      <p className="p--btn p--btn__kontakty">
        <a href="kontakty.jsx" className="a--btn a--btn__kontakty">
          btn proklik kontakty
        </a>
      </p>
    </div>
  );
};

export default Home;
