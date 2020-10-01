import React from "react";

import Img from "../../../assets/img/dash2.jpg";

const Carousel = () => {
  return (
    <>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={Img} style={{ width: "100%" }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={Img} style={{ width: "100%" }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Img} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  );
};

export default Carousel;
