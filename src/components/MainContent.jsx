// src/MainContent.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AudioPlayer from "./Audio"; // Import the AudioPlayer component
import "../../src/MainContent.css";
import "./Audio.css"; // Import the CSS for AudioPlayer
import ImageGallery from './ImageGallery.jsx'

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const discoBallLeftRef = useRef();
  const discoBallRightRef = useRef();
  const letsDanceRef = useRef();

  useEffect(() => {
    // Disco ball animation
    gsap.fromTo(
      discoBallLeftRef.current,
      { y: 0 }, // Start at the top of the screen
      {
        y: 100, // Adjust this value to change the height of the up and down motion
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      discoBallRightRef.current,
      { y: 0 }, // Start at the top of the screen
      {
        y: 100, // Adjust this value to change the height of the up and down motion
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      }
    );

    // Let's Dance animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(letsDanceRef.current, { x: 100, duration: 1, ease: "power1.inOut" })
      .to(letsDanceRef.current, { y: 50, duration: 1, ease: "power1.inOut" })
      .to(letsDanceRef.current, { x: -100, duration: 1, ease: "power1.inOut" })
      .to(letsDanceRef.current, { y: -50, duration: 1, ease: "power1.inOut" });
  }, []);

  return (
    <div className="main-content">
      <img ref={discoBallLeftRef} className="ball ball-left" src="./discoRM.png" alt="Disco Ball" />
      <img ref={discoBallRightRef} className="ball ball-right" src="./discoRM.png" alt="Disco Ball" />
      <div>
        <h1 className="titlePepe">SOLPEPE</h1>
        <h2 ref={letsDanceRef} className="letsDance">LET'S DANCE</h2>
      </div>
      <AudioPlayer src="./audioOne.mp3" /> {/* Add the AudioPlayer component */}
      <ImageGallery />
    </div>
  );
};

export default MainContent;
