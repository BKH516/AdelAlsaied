import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Bakery.css";
import "../../../Style/Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bakery = () => {
  const images = [
    "./Image/Bakery1.jpg",
    "./Image/Bakery2.jpg",
    "./Image/Bakery3.jpg",
    "./Image/Bakery4.jpg",
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <div className="url-6">
      {isMobile ? (
        <div className="slider-container">
          <Slider {...sliderSettings} className="slider-wrapper">
            {images.map((src, index) => (
              <div key={index} className="photo-item-slide">
                <div className="hover-container">
                  <img src={src} alt={`Image ${index}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="photo-wrapper-6">
          {images.map((src, index) => (
            <div key={index} className="photo-item">
              <img src={src} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bakery;
