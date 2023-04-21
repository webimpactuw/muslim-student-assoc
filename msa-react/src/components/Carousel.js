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
      setContent(...content);
  }, []);

  const pictures = content?.map((item, index) => (
    <div key={index} className="each-slide" style={{backgroundImage: `url("${item.image}")`}}/>
  ));
  
  function importAll(r) {
    let imgs = [];
    r.keys().map((item, index) => { imgs[index] = r(item); });
    return imgs;
  }

  const properties = {
    duration: 1000,
    // autoplay: false,
    transitionDuration: 500,
    easing: "ease",
    indicators: true,
    nextArrow: <img src={rightArrow} id="right-arrow"/>,
    prevArrow: <img src={leftArrow} id="left-arrow"/>,
  };

  const images = importAll(require.context('../assets/social-media', false, /\.(svg)$/));

  return (
    <div className="slide-container">
      <Slide ref={React.createRef()} {...properties}>
        {pictures}
        <div className="each-slide" style={{backgroundImage: `url("${images[0]}")`}}/>
      </Slide>
    </div>
  );
}

export default Carousel;