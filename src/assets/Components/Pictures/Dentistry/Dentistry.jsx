import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Dentistry.css";
import "../../../Style/Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dentistry = () => {
  const images = [
    "./Image/Dintestry1.jpg",
    "./Image/Dintestry2.jpg",
    "./Image/Dintestry3.jpg",
    "./Image/Dintestry4.jpg",
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
    <div className="url-1">
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
        <div className="photo-wrapper-1">
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

export default Dentistry;
