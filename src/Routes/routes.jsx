import React from "react";
import { Routes, Route } from "react-router-dom";
import { data } from '../../src/assets/parcours/parcours'

// ACCUEIL
import HomePage from "../pages/HomePage";
// LE GOLF ROUTES
import Tarifs from "../components/leGolf/Tarifs";
import EquipeDuGolf from "../components/leGolf/Equipe_du_golf";
import HistoireEtValeurs from "../components/leGolf/Histoire_et_valeurs";
import ReglementInterieur from "../components/leGolf/Reglement_interieur";
// PARCOURS ROUTES
// import Parcours18Trous from "../components/parcours/18_trous/Parcours_18_trous";
// import DetailParcours18Trou from '../components/parcours/18_trous/Detail_trou';
// import Parcours18 from "../components/parcours/18_trous/Parcours_18"
import Parcours from '../components/parcours/18_trous/index'
import DetailTrou from '../components/parcours/18_trous/Detail_trou'

//Detail_trou ROUTES

import ParcoursCompact from "../components/parcours/parcours_compact/Parcours_compact";
// COMPETITION ROUTES
import Calendrier from "../components/competition/Calendrier"
import Departs from "../components/competition/Departs"
import Inscription from "../components/competition/Inscription"
import Resultats from "../components/competition/Resultats"
// ENSEIGNEMENT ROUTES
import Academie from '../components/enseignement/Academie'
import Pro from "../components/enseignement/Pro"
import DebuterLeGolf from "../components/enseignement/DebuterLeGolf"
import TarifsCours from "../components/enseignement/TarifsCours"
// FOOTGOLF ROUTES
import CalendrierFootGolf from "../components/footgolf/Calendrier"
import InitiationFootGolf from '../components/footgolf/Initiation'
//ASSOCIATION SPORTIVE ROUTES
import ComiteDirecteur from '../components/association_sportive/ComiteDirecteur'
import ValeurMission from '../components/association_sportive/ValeurMission'
// RESTAURANT ROUTES
import Presentation from '../components/restaurant/Presentation'
import Menu from '../components/restaurant/Menu'
import Groupe from '../components/restaurant/Groupe'
// import { Presentation, Menu, Groupe } from '../components/restaurant'
// ENTREPRISE ROUTES
import Partenaire from '../components/entreprise/Partenaire'
import Seminaire from "../components/entreprise/Seminaire"
// ACTUALITE ROUTES
import Actualite from "../components/actualite/Actualite"
import News from "../components/homepage/newsPage/News";
// CONTACT ROUTES
import ContactForm from "../components/contactForm/ContactForm";

// ERROR PAGE ROUTE
import ErrorPage from "../pages/ErrorPage";

const PrivateRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Le golf navigation routes */}
                <Route path="/equipe-du-golf" element={<EquipeDuGolf />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/histoire-et-valeurs" element={<HistoireEtValeurs />} />
                <Route path="/reglement-interieur" element={<ReglementInterieur />} />

                {/* Liens parcours */}
                {/* <Route path="/parcours-18-trous" element={<Parcours18Trous />} /> */}
                {/* <Route path="/parcours-18-trous/:id" element={<DetailParcours18Trou />} /> */}
                <Route path="/parcours-18-trous" element={<Parcours data={data} />} />
                <Route path="/parcours-18-trous/:id" element={<DetailTrou data={data} />} />
                <Route path="/parcours-compact" element={<ParcoursCompact />} />

                {/* Liens compétitions */}
                <Route path="/calendrier" element={<Calendrier />} />
                <Route path="/departs" element={<Departs />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/resultats" element={<Resultats />} />

                {/* Liens enseignement */}
                <Route path="/academie" element={<Academie />} />
                <Route path="/le-pro" element={<Pro />} />
                <Route path="/debuter-le-golf" element={<DebuterLeGolf />} />
                <Route path="/tarifs-cours" element={<TarifsCours />} />


                {/* Liens footgolf */}
                <Route path="/calendrier-footgolf" element={<CalendrierFootGolf />} />
                <Route path="/initiation-footgolf" element={<InitiationFootGolf />} />

                {/* Liens Association sportive */}
                <Route path="/comite-directeur" element={<ComiteDirecteur />} />
                <Route path="/valeur-et-mission" element={<ValeurMission />} />

                {/* Liens restaurants */}
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/groupe" element={<Groupe />} />

                {/* Liens entreprise */}
                <Route path="/devenez-partenaire" element={<Partenaire />} />
                <Route path="/seminaire" element={<Seminaire />} />

                {/* Liens actualités */}
                <Route path="/actualite" element={<Actualite />} />
                <Route path="/news" element={<News />} />

                {/* Liens contact */}
                <Route path="/contact" element={<ContactForm />} />
                {/* <Route path="/formulaire-de-contact" element={<Contact />} /> */}



                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default PrivateRoutes;
