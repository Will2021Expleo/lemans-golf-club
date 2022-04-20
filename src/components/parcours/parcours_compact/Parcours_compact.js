import React, { Component } from "react";
import { parcours_compact } from "../../../assets/parcours/parcours";
import { Link } from "react-router-dom";

class Parcours_compact extends Component {
  render() {
    return (
      <div>
        <div className="header_img_parcours"></div>
        <h1>Parcours compact</h1>
        <div className="parcours-container">
          {parcours_compact.map((item, i) => {
            return (
              <div className="cards" key={i}>
                <img src={item.image} alt={item.trou} />
                <div className="numéro_trou">{item.trou}</div>
                <Link to={item.path}>
                  <p className="detail-trou">{item.detail}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Parcours_compact;
