import React, { Component } from 'react';
import Cards from './Cards'
import NavSlideNews from './NavSlideNews'
import {newsCards} from '../../../assets/newscards/newscards'



// import {getData} from '../../../assets/newscards/newscards'

 class NewsCards extends React.Component {
   state = {
     data: [],
   };
   myRef = React.createRef();
   
      componentDidMount(){
          const data = newsCards;
          this.setState({data: data})
      }

      prevSlide = () => {
          //console.log(this.myRef.current);
          const slide = this.myRef.current;
          slide.scrollLeft -= slide.offsetWidth;
        if(slide.scrollLeft <= 0){
            slide.scrollLeft = slide.scrollWidth;
        }
      };

       nextSlide = () => {
           const slide = this.myRef.current;
           slide.scrollLeft += slide.offsetWidth;
           if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
             slide.scrollLeft = 0;
           }
      }

   render() {
     //   const data  = this.state.data;
     const { data } = this.state;
     return (
       <div className="slidecards-container">
           <h1 className="title">Actualités</h1>
         <div className="wrapper">
           <div className="app" ref={this.myRef}>
             <Cards data={data} />
           </div>
         <NavSlideNews prev={this.prevSlide} next={this.nextSlide}/>
           
         </div>
       </div>
     );
   }
 }

export default NewsCards;
