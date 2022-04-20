import React from "react";
import logo_enseignement from "./images/logo_enseignement.png";

const Academie = () => {
  return (
    <>
      <div className="page">
        <div className="container-page">
          <div className="title">Académie</div>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="academie-content">
            <img src={logo_enseignement} alt="" />
            <p className="golf-academie">
              Sargé <br /> Académie
            </p>
          </div>
          <ul className="academie-navigation">
            <li>Pass go for golf</li>
            <li>Les cours individuels</li>
            <li>Ecole de golf</li>
            <li>Pass année</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Academie;
