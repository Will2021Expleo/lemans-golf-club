const icone_practice = require("./img/practice.png");

const icone_depart = require("./img/depart.png");

const icone_green = require("./img/green.png");

const icone_voiturette = require("./img/voiturette.png");

//image à changer par celle d'un chariot
const icone_chariot = require("./img/parcours.png");

export const information = [
  {
    title: "Practice",
    state: "Ouvert",
    icone: icone_practice,
  },
  {
    title: "Départ",
    state: "hiver",
    icone: icone_depart,
  },
  {
    title: "Green",
    state: "autorisé",
    icone: icone_green,
  },
  {
    title: "Voiturette",
    state: "non autorisée",
    icone: icone_voiturette,
  },
  {
    title: "chariot",
    state: "autorisé",
    icone: icone_chariot,
  },
];

/**
 * pratice = ouvert / fermé,
 * départ = été / hiver,
 * green : autorisé / non autorisé,
 * voiturette : autorisée / non autorisée,
 * chariot : autorisé / non autorisé,
 */
