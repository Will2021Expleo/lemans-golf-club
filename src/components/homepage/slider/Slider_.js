import React from 'react';
import {Carousel} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import slide1 from "../../../assets/slide/images/slide1.jpg";
import slide2 from "../../../assets/slide/images/slide2.jpg";
import slide3 from "../../../assets/slide/images/slide3.jpg";
import slide4 from "../../../assets/slide/images/slide4.jpg";
import slide5 from "../../../assets/slide/images/slide5.jpg";

const Slider = () => {
  return (
    <Carousel variant="dark" controls={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 slide" src={slide1} alt="First slide" />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide" src={slide2} alt="Second slide" />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide" src={slide3} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
