import React from 'react';
import prevSlide from "../../../assets/img/arrow_left.svg";
import nextSlide from "../../../assets/img/arrow_right.svg";


class NavSlideNews extends React.Component{
    render(){
        const {next, prev} = this.props;
        return (
          <div className="row">
            <div className="prev" onClick={prev}>
              <img src={prevSlide} alt="précédent" />
            </div>
            <div className="next" onClick={next}>
              <img src={nextSlide} alt="suivant" />
            </div>
          </div>
        );
    }
}
export default NavSlideNews