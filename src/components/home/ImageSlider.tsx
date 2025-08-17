import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderOne from "/imgs/slider-1.webp";
import sliderTwo from "/imgs/slider-2.webp";

function ImageSlider() {
  const settings = {
    className: "text-center",
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    arrows: false,
  };
  return (
    <div className="slider-container col-span-full w-full self-center justify-self-center px-5 md:px-10 lg:col-span-full lg:col-start-2 lg:w-[90%] lg:justify-self-end">
      <Slider {...settings}>
        <div>
          <img src={sliderOne} alt="" />
        </div>
        <div>
          <img src={sliderTwo} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
