import React from "react";
import { parcours_18_trous } from "../../../assets/parcours/parcours";

const CardCourse = () => {
  return (
    <>
      <div className="golfCourse-information">
        <p className="title">Règles & plan général</p>
        <ul className="description">
          <li>
            1- Hors limite : en l'absence de piquets blancs, les clôtures
            électriques définissent le hors limite.
          </li>
          <li>
            2- Zones à pénalité : sur le trou n°10, toute balle ayant franchi
            les piquet rouges le long du parc du château est considérée en zone
            à pénalité rouge.
          </li>
        </ul>
        <img src="" className="carte-parcours" alt="carte-parcours" />
        <img src="" className="logo-card" alt="logo" />
      </div>
      <div className="card-course">
        {parcours_18_trous.map((item, i) => {
          return (
            <div className="title" key={i}>
              {item.name}
            </div>
          );
        })}
        <div className="card-detail">
          <img className="cover" src="" alt="" />
          <ul className="distances">
            <li className="white"></li>
            <li className="yellow"></li>
          </ul>
          <img className="thumb" src="" alt="" />
        </div>
        <div className="conseil"></div>
      </div>
    </>
  );
};

export default CardCourse;
