import React from "react";
import LeGolf_nav from "./LeGolf_nav";

import { direction } from "../../assets/leGolf/equipe_du_golf/direction";
import { terrain } from "../../assets/leGolf/equipe_du_golf/terrain";
import { enseignement } from "../../assets/leGolf/equipe_du_golf/enseignement";
import { restaurant } from "../../assets/leGolf/equipe_du_golf/restaurant";

const Equipe_du_golf = () => {
  return (
    <>
      <div className="page">
        <div className="container-page">
          <div className="title">Equipe du golf</div>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="content-legolf-card">
            <img src="#" alt="equipe" className="photo-equipe" />

            <div className="teams-content">
              <div className="direction">
                <h2>Direction</h2>
                {direction.map((item, i) => {
                  return (
                    <div className="cards" key={i}>
                      <div className="identity">
                        <img src={item.photo} alt="" />
                        <p className="name">{item.name}</p>
                        <p className="fonction">{item.fonction}</p>
                      </div>
                      <p className="presentation">{item.presentation}</p>
                    </div>
                  );
                })}
              </div>
              <div className="terrain">
                <h2>Terrain</h2>
                {terrain.map((item, i) => {
                  return (
                    <div className="cards" key={i}>
                      <div className="identity">
                        <img src={item.photo} alt="" />
                        <p className="name">{item.name}</p>
                        <p className="fonction">{item.fonction}</p>
                      </div>
                      <p className="presentation">{item.presentation}</p>
                    </div>
                  );
                })}
              </div>
              <div className="enseignement">
                <h2>Enseignement</h2>
                {enseignement.map((item, i) => {
                  return (
                    <div className="cards" key={i}>
                      <div className="identity">
                        <img src={item.photo} alt="" />
                        <p className="name">{item.name}</p>
                        <p className="fonction">{item.fonction}</p>
                      </div>
                      <p className="presentation">{item.presentation}</p>
                    </div>
                  );
                })}
              </div>
              <div className="restaurant">
                <h2>Restaurant</h2>
                {restaurant.map((item, i) => {
                  return (
                    <div className="cards" key={i}>
                      <div className="identity">
                        <img src={item.photo} alt="" />
                        <p className="name">{item.name}</p>
                        <p className="fonction">{item.fonction}</p>
                      </div>
                      <p className="presentation">{item.presentation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipe_du_golf;
