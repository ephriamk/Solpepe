import React, { useState } from "react";
import "./Tokenomics.css";

const Tokenomics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "./Pump pill graphic 2.jpg",
      alt: "Slide 1",
      caption: "Blast through Pump Fun",
    },
    {
      src: "./Raydium graphic 2.jpg",
      alt: "Slide 2",
      caption: "DEX Banner Pre-Paid AND DEX ADDS PRE PAID!",
    },
    {
      src: "./King.jpg",
      alt: "Slide 3",
      caption: "500K Market Cap and DEX Trending",
    },
    { src: "/Pfp_hires 2.jpg", alt: "Slide 4", caption: "This is Slide 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="tokenomics-container">
      <h2 className="h2Large">ROADMAP</h2>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <div className="slide">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="slide-image"
          />
        </div>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
      <div className="caption">{slides[currentSlide].caption}</div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
