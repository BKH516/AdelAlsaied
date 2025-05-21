import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionLogo.css";

const logos = [
  "/Logo/1-01.png",
  "/Logo/2-01.png",
  "/Logo/3-01.png",
  "/Logo/4-01.png",
  "/Logo/5-01.png",
  "/Logo/6-01.png",
  "/Logo/7-01.png",
  "/Logo/8-01.png",
  "/Logo/9-01.png",
  "/Logo/10-01.png",
  "/Logo/11-01.png",
  "/Logo/12-01.png",
  "/Logo/13-01.png",
  "/Logo/14-01.png",
];

const SectionLogo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="weird-wrapper-zonex">
      <div className="bizarre-container-19a">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div className="quirky-slide-773" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionLogo;
