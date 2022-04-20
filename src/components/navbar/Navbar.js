import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SubMenu from "./SubMenu";
import {
  NavbarItems_left,
  NavbarItems_right,
} from "../../assets/navbar/NavbarItems";

const Navigation = () => {
  return (
    <div className="navbar-container">
      <Navbar bg="navbar" variant="dark" fixed="top">
        <Nav>
          {/* <Nav.Link>Accueil</Nav.Link> */}

          {NavbarItems_left.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </Nav>

        <Nav>
          <img src={logo} alt="logo" />
        </Nav>
        <Nav>
          {NavbarItems_right.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;

{
  /* <div class="dropdown">
        {NavbarItems_right.map((item, index) => {
          return (
            <div>
              <div
                class="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                {item.title}
              </div>
              <div class="dropdown-menu">
                {item.subNav.map((subItem, index) => {
                  return (
                    <a class="dropdown-item" href="#">
                      {subItem.title}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */
}
