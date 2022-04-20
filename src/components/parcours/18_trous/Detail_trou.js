import React from "react";
import { useParams } from "react-router-dom";

const DetailTrou = ({ data }) => {
  const { id } = useParams();

  const prevHole = () => {
    console.log("Trou précédent");
  };
  const nextHole = () => {
    console.log("Trou suivant");
  };

  return (
    <section>
      {data
        .filter((trou) => trou.id === id)
        .map((trou, index) => (
          <div className="content-hole-page" key={index}>
            <h1>Trou {trou.trou}</h1>
            <h3 className="title-hole">
              {trou.par} / {trou.hcp}
            </h3>
            <div className="content-card-hole">
              <img className="hole-image" src={trou.image} alt="" />

              <div className="distances">
                {/* <Distances dist /> */}
                <div className="distances-card">
                  <div className="white"></div>
                  <div className="title">{trou.dist_blanc}</div>
                </div>
                <div className="distances-card">
                  <div className="yellow"></div>
                  <div className="title">{trou.dist_jaune}</div>
                </div>
                <div className="distances-card">
                  <div className="blue"></div>
                  <div className="title">{trou.dist_bleu}</div>
                </div>
                <div className="distances-card">
                  <div className="red"></div>
                  <div className="title">{trou.dist_rouge}</div>
                </div>
                {/* <div className="distances-card">
                  <div className="violet"></div>
                  <div className="title">{trou.dist_violet}</div>
                </div>
                <div className="distances-card">
                  <div className="orange"></div>
                  <div className="title">{trou.dist_orange}</div>
                </div> */}
              </div>
              <img className="thumb-hole" src={trou.thumb} alt="" />
            </div>
            <div className="conseil-du-pro">
              <h2 className="title">Le conseil du Pro</h2>
              <p>{trou.conseil}</p>
            </div>

            <div className="nav-hole">
              <div className="left" onClick={prevHole()}>
                Trou Précédent
              </div>
              <div className="right" onClick={nextHole()}>
                Trou Suivant
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default DetailTrou;
