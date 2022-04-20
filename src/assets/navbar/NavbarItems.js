import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavbarItems_left = [
  {
    id: "1",
    title: "Accueil",
    // path: "/",
    cName: "menu-item",
    icon: <AiIcons.AiFillHome />,
    subNav: [
      {
        title: "Accueil",
        path: "/",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "2",
    title: "Le Golf",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Histoire et valeurs",
        path: "/histoire-et-valeurs",
        cName: "menu-item",
      },
      {
        title: "Equipe du club",
        path: "/equipe-du-golf",
        cName: "menu-item",
      },
      {
        title: "Réglement intérieur",
        path: "/reglement-interieur",
        cName: "menu-item",
      },
      {
        title: "Tarifs",
        path: "/tarifs",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "3",
    title: "Le Parcours",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Parcours 18 trous",
        path: "/parcours-18-trous",
        cName: "menu-item",
      },
      {
        title: "Parcours compact",
        path: "/parcours-compact",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "4",
    title: "Compétition",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Calendrier",
        path: "/calendrier",
        cName: "menu-item",
      },
      {
        title: "Départ",
        path: "/departs",
        cName: "menu-item",
      },
      {
        title: "Résultat",
        path: "/resultats",
        cName: "menu-item",
      },
      {
        title: "Inscriptions",
        path: "/inscription",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "5",
    title: "Enseignement",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Académie",
        path: "/academie",
        cName: "menu-item",
      },
      {
        title: "Le pro",
        path: "/le-pro",
        cName: "menu-item",
      },
      {
        title: "Débuter le golf",
        path: "/debuter-le-golf",
        cName: "menu-item",
      },
      {
        title: "Tarifs cours",
        path: "/tarifs-cours",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "6",
    title: "FootGolf",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Calendrier",
        path: "/calendrier-footgolf",
        cName: "menu-item",
      },
      {
        title: "Initiation",
        path: "/initiation-footgolf",
        cName: "menu-item",
      },
    ],
  },
];

export const NavbarItems_right = [
  {
    id: "1",
    title: "Association sportive",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Comité directeur",
        path: "/comite-directeur",
        cName: "menu-item",
      },
      {
        title: "Valeur et mission",
        path: "/valeur-et-mission",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "2",
    title: "Restaurant",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Présentation",
        path: "/presentation",
        cName: "menu-item",
      },
      {
        title: "Les menus",
        path: "/menu",
        cName: "menu-item",
      },
      {
        title: "Groupe",
        path: "/groupe",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "3",
    title: "Entreprise",
    // path: "/",
    cName: "menu-item",
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Devenez partenaire",
        path: "/devenez-partenaire",
        cName: "menu-item",
      },
      {
        title: "Séminaire",
        path: "/seminaire",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "4",
    title: "Actualité",
    // path: "/actualite",
    cName: "menu-item",
    subNav: [
      {
        title: "Actualité",
        path: "/actualite",
        cName: "menu-item",
      },
    ],
  },
  {
    id: "5",
    title: "Contact",
    // path: "/contact",
    cName: "menu-item",
    subNav: [
      {
        title: "Contact",
        path: "/contact",
        cName: "menu-item",
      },
    ],
  },
];
