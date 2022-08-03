import React, { Component } from "react";
import Slider from "react-slick";

export default function Slick(){
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        }
        return (
          <div className="w-full mx-auto">
            <h2></h2>
            <Slider className="justify-center items-center mx-auto" {...settings}>
              <div>
                <h3>31313131</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        );
}
