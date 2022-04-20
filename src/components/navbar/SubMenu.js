import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style-type: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

const DropdownLink = styled.div`
 background : #414757;
 padding-left : 10px;
 display: flex;
 align-items : center;
 text-decoration : none;
 color:# f5f5f5
 font-size : 18px;

 &:hover{
     background: #632ce4;
     cursor: pointer;
 }

`;
const NavbarLabel = styled.span`
  margin-left: 10px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubvnav] = useState(false);

  const showSubnav = () => setSubvnav(!subnav);
  return (
    <>
      <NavbarLink onClick={item.subNav && showSubnav}>
        <div>
          <NavDropdown title={item.title}>
            {subnav &&
              item.subNav.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={item.path}>
                      <NavbarLabel>{item.title}</NavbarLabel>
                    </Link>
                  </NavDropdown.Item>
                );
              })}
          </NavDropdown>
        </div>
      </NavbarLink>
    </>
  );
};

export default SubMenu;
