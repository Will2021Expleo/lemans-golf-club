import React from "react";
import { Link } from "react-router-dom";

const LeGolf_nav = () => {
  return (
    <div className="golf-navigation">
      <div className="box">
        <Link to="/histoire-et-valeurs">
          <h3>Histoire et valeurs</h3>
        </Link>
      </div>

      <div className="box">
        <Link to="/equipe-du-golf">
          <h3>Equipe du club</h3>
        </Link>
      </div>

      <div className="box">
        <Link to="/reglement-interieur">
          <h3>Réglement intérieur</h3>
        </Link>
      </div>
      <div className="box">
        <Link to="/tarifs">
          <h3>Tarifs</h3>
        </Link>
      </div>
    </div>
  );
};

export default LeGolf_nav;
