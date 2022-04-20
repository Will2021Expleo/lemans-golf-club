import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="page">
          <div className="container-page">
            <div className="title">Les menus</div>
            <div className="underline"></div>
          </div>
          <div className="content menu-page">
            <div className="menu-jour">
              <div className="menu-name"></div>
              <div className="menu-image"></div>
              <div className="menu-price"></div>
              <div className="menu-reservation"></div>
            </div>
            <div className="menu-cards">
              <div className="restaurant-card">
                <div className="card-name"></div>
                <div className="card-image"></div>
                <div className="card-price"></div>
                <div className="card-reservation"></div>
              </div>
              <div className="restaurant-card">
                <div className="card-name"></div>
                <div className="card-image"></div>
                <div className="card-price"></div>
                <div className="card-reservation"></div>
              </div>
              <div className="restaurant-card">
                <div className="card-name"></div>
                <div className="card-image"></div>
                <div className="card-price"></div>
                <div className="card-reservation"></div>
              </div>
              <div className="restaurant-card">
                <div className="card-name"></div>
                <div className="card-image"></div>
                <div className="card-price"></div>
                <div className="card-reservation"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
