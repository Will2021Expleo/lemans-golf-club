import React, { Component } from 'react';

export class Cards extends Component {
  render() {
      const {data} = this.props;
    return (
      <>
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt="" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="/">Consulter...</a>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Cards;
