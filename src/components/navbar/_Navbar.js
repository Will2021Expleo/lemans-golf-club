import React, { useState } from "react";
import {
  NavbarItems_left,
  NavbarItems_right,
} from "../../assets/navbar/NavbarItems";

import SubMenu from "./SubMenu";
import logo from "../../assets/logo/logo.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const NavCenter = styled.div`
  // width: 100%;
  background: #0d3b2e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  // height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d3b2e;
`;

const Navbox = styled.nav`
  background: #151171c;
  width: 100%;
  height: 100vh;
  display: flex;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ navbox }) => (navbox ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const NavboxWrap = styled.div`
  width: 100%;
`;

export default function Navigation() {
  const [navbox, setNavbox] = useState(false);

  const showNavbox = () => setNavbox(!navbox);

  return (
    <>
      <Navbar>
        {/* icone d'ouverture du menu en responsive */}
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showNavbox} />
          </NavIcon>
        </Nav>
        {/* icone de fermeture du menu en responsive */}
        <Navbox navbox={navbox}>
          <NavboxWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showNavbox} />
            </NavIcon>
            {NavbarItems_left.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </NavboxWrap>
        </Navbox>
        {/* Logo du site */}
        <NavCenter>
          <img src={logo} alt="logo" />
        </NavCenter>

        <Navbox>
          <NavboxWrap>
            {NavbarItems_right.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </NavboxWrap>
        </Navbox>
      </Navbar>
    </>
  );
}
