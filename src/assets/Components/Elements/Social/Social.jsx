import React from 'react'
import "./Social.css"

const images = [
    './Image/Bakery1.jpg',
    './Image/DeliveryCompany1.jpg',
    './Image/Dintestry1.jpg',
    './Image/RealEstateHome1.jpg',
    './Image/TravelAndTourismCompany1.jpg'
  ];
export default function Social() {
  return (
    <div className="slider-container">
    <div className="slider-track">
      {images.concat(images).map((img, index) => (
        <div className="slide" key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  </div>
  )
}
