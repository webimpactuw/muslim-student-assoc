import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// react-slideshow docs
// https://react-slideshow-image.netlify.app/?path=/story/examples-slide--default
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

function Carousel({imgs, length}) {

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        easing: "ease",
        indicators: true,
        nextArrow: <img src={rightArrow} id="right-arrow"/>,
        prevArrow: <img src={leftArrow} id="left-arrow"/>,
      };
    
      return (
        <div className="App">
          <div className="slide-container">
            <Slide ref={React.createRef()} {...properties}>
              {imgs.map((each, index) => (
                <div key={index} className="each-slide">
                  <img className="slide" src={each} alt="carousel-img" />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      );
    
}

export default Carousel;