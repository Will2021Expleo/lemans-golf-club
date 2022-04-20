import React from "react";
import { Link } from "react-router-dom";
import image_parcours from "../../../assets/parcours/img_parcours/image_parcours.png";
import logo_score_card from "../../../assets/parcours/img_parcours/logo_score_card.png";

const Parcours_18_trous = ({ data }) => {
  return (
    <>
      <div className="page">
        <div className="container-page">
          <div className="title">Parcours 18 trous</div>
          <div className="underline"></div>
        </div>
        <div className="golfcourse-information">
          <img src={logo_score_card} className="logo-card" alt="logo" />
          <div className="rules-container">
            <p className="title">Règles & plan général</p>
            <ul className="description">
              <li>
                <span>1-</span> Hors limite : en l'absence de piquets blancs,
                les clôtures électriques définissent le hors limite.
              </li>
              <li>
                <span>2-</span> Zones à pénalité : sur le trou n°10, toute balle
                ayant franchi les piquet rouges le long du parc du château est
                considérée en zone à pénalité rouge.
              </li>
              <li>
                <span>3-</span> Dropping zone : trou n°6 toute balle se trouvant
                dans la marre à l'arière du green pourra être jouée avec
                pénalité à partir de la dropping zone située à droite du green.
              </li>
              <li>
                <span>4-</span> Obstruction inamovibles (dégagement sans
                pénalité)
                <br />
                - les chemins empierrés ou goudronnés
                <br />
                - le puits du trou n°14
                <br />- les couvercles synthétiques du parcours foot golf
              </li>
            </ul>
          </div>

          <img
            src={image_parcours}
            className="carte-parcours"
            alt="carte-parcours"
          />
        </div>
        <div className="parcours-18-trous">
          <div className="parcours-container">
            {data.map((trou, index) => {
              return (
                <div className="cards" key={index}>
                  {/* <Link to={item.path + item.id}> */}
                  <Link to={`/parcours-18-trous/${trou.id}`}>
                    <img src={trou.image} alt={trou.trou} />
                    <div className="numero_trou">{trou.trou}</div>
                    <p className="detail_trou">{trou.detail}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Parcours_18_trous;
