import React from 'react';
// import {imageSlider} from '../../assets/slide/imageSlider'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide1 from '../../../assets/slide/images/slide1.jpg'
import slide2 from '../../../assets/slide/images/slide2.jpg'
import slide3 from '../../../assets/slide/images/slide3.jpg'
import slide4 from '../../../assets/slide/images/slide4.jpg'
import slide5 from '../../../assets/slide/images/slide5.jpg'

const proprietes = {
duration : 3000,
transition: 500,
infinite: true,
indicators: false,
arrows: false,
}


function Slider() {
  return(
<>
   {/* {imageSlider.map((slide, id)=> (
       <div className="each-slide" key={id}>
           <div style={{'backgroundImage': `url(${slide.url})`}}>
                <span>{slide.caption}</span>
           </div> 
           <div>
               <img src={slide.image} alt={slide.caption}/>
             
           </div>
       </div>
         ))} */}

<div className="slidebox">
    <Slide {...proprietes}>
        

        <div className="each-slide">
            <div>
                <img className="slide" src={slide1} alt="slide 1"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img className="slide"  src={slide2} alt="slide 2"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img className="slide"  src={slide3} alt="slide 3"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img className="slide"  src={slide4} alt="slide 4"/>
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img className="slide"  src={slide5} alt="slide 5"/>
            </div>
        </div>
    </Slide>
</div>
</>

  ) 
}

export default Slider;



