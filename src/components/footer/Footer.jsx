import React, { Component } from "react";
import logo from "../../assets/logo/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__container">
            <div className="left">
                <p> Le Mans Golf Club - Sargé</p>
                <p> Rue du Golf</p>
                <p> 72190 Sargé-Lès-Le-Mans</p>
                <p className="mentions">Mentions légales</p>
            </div>
            <div className="center">
              <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <p>Tél : 02 43 76 25 07</p>
                <p>Fax : 02 43 76 45 25</p>
                <p>golfdesarge@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>Copyright 2021 - Le Mans Golf Club - Sargé</p>
        </div>
      </div>
    );
  }
}

export default Footer;
