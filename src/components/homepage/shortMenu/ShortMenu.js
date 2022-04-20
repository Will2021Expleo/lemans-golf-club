import React from "react";
import { Link } from "react-router-dom";

const ShortMenu = () => {
  return (
    <div className="shortmenu-container">
      <div className="golf-items">
        <div className="item-content">
          <div className="golf-course-members"></div>
          <a href="https://prima.golf/sarge/login" target="_blank">
            <p>Réserver un départ membres</p>
          </a>
        </div>
        <div className="item-content">
          <div className="golf-course-visitors"></div>
          <a href="https://prima.golf/sarge/register" target="_blank">
            <p>Réserver un départ visiteurs</p>
          </a>
        </div>
        <div className="item-content">
          <div className="subscribe-competitions"></div>
          <p>Inscriptions compétitions</p>
        </div>
        <div className="item-content">
          <div className="started-competitions"></div>
          <p>Départs compétitions</p>
        </div>
        <div className="item-content">
          <div className="results-competitions"></div>
          <p>Résultats compétitions</p>
        </div>
      </div>
    </div>
  );
};

export default ShortMenu;
