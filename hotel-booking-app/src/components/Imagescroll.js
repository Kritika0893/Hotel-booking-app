import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image4 from "../images/hotelpic1.png"
import Image5 from "../images/hotelpic1.png"
import Image6 from "../images/hotelpic1.png"
import Image7 from "../images/hotelpic1.png"
import Image8 from "../images/hotelpic1.png"




const Imagescroll = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
      <img src={Image4}/>
      </div>
      <div>
      <img src= {Image5}/>
      </div>
      <div>
      <img src={Image6} />
      </div>
      <div>
      <img src={Image7} />
      </div>
      <div>
      <img src={Image8} />
      </div>
      {/* Add more images here */}
    </Slider>
  );
};

export default Imagescroll;