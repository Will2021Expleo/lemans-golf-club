import React from "react";
import LeGolf_nav from "./LeGolf_nav";
import { abonnements } from "../../assets/leGolf/tarifs/abonnements";

const Tarifs = () => {
  return (
    <>
      <div className="page">
        <div className="container-page">
          <div className="title">Tarifs</div>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="abonnement-box">
            <h2 className="abonnement-box__title">Abonnement annuel</h2>
            <ul className="abonnement-box__table">
              <li className="abonnement-box__table__head">
                <p>type abonnement</p>
                <p>Semaine</p>
                <p>Semaine + Week-end</p>
              </li>
            </ul>
            {abonnements.map((item, i) => {
              return (
                <ul className="abonnement-box__table">
                  <li className="abonnement-box__table__details" key={i}>
                    <p className="category">{item.category}</p>
                    <p className="tarif_semaine">{item.tarif_semaine}</p>
                    <p className="tarif_full">{item.tarif_full}</p>
                  </li>
                </ul>
              );
            })}
            <div className="end-box"></div>
          </div>

          <div className="greenfee-box">
            <h2 className="greenfee-box__title">GreenFee</h2>
            <ul className="greenfee-box__table">
              <li className="greenfee-box__table__head">
                <p>Type</p>
                <p>Tarif</p>
                <p>Carte Gold le club</p>
                <p>Carte classic le club, BeGolf</p>
              </li>
            </ul>
            <div className="end-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarifs;
