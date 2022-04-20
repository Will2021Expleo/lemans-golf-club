import React from "react";

import { information } from '../../../assets/homepage/information/information'

const Informations = () => {
  return (
    <div className="informations">
      <div className="informations__golf-container">
        <ul className="box">
          {information.map((item, i) => {
            return (
              <li className="ouvert" key={i}>
                <ul>
                  <li className="image">
                    <img src={item.icone} alt="" className="" />
                  </li>
                  <li className="titre">{item.title}</li>
                  <li className="statut">{item.state}</li>
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Informations;
