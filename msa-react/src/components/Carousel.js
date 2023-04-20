import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// react-slideshow docs
// https://react-slideshow-image.netlify.app/?path=/story/examples-slide--default
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

import client from "../client";
import { useEffect, useState } from "react";

function Carousel() {

  const query = "*[_type == 'carousel'] { 'image': picture.asset->url }";

  const [content, setContent] = useState([]);
  useEffect(() => {
      client.fetch(query)
          .then((data) => setContent(data));
  }, []);

  const pictures = content ? content.map((item, index) => (
    <div key={index} className="each-slide" style={{backgroundImage: `url("${item.image}")`}}/>
  )) : null;
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    easing: "ease",
    indicators: true,
    nextArrow: <img src={rightArrow} id="right-arrow"/>,
    prevArrow: <img src={leftArrow} id="left-arrow"/>,
  };
  
  return (
    <div className="slide-container">
      {JSON.stringify(content)}
      <Slide ref={React.createRef()} {...properties}>
        {pictures}
      </Slide>
    </div>
  );
}

export default Carousel;