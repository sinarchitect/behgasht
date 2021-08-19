import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const SlickSlider = () => {
    const settings = {
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        autoplaySpeed: 2000,
        // centerMode: true,
        infinite: true,
        // dots: true,
        className: '',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              autoplay: true,
              speed: 500,
              autoplaySpeed: 2000,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      };
    
    return ( 
        <Slider {...settings}>

        <div>
          <img height="600px" style={{ width: "100%" }} src="/img/1.jpg" />
        </div>
        <div>
          <img height="600px" style={{ width: "100%" }} src="/img/wc1682508.jpg" />
        </div>

      </Slider>
     );
}
 
export default SlickSlider;