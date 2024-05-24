import React from "react";
import GalleryComponent from "../GalleryComponent";
import "../../src/MainContent.css";
import HorizontalImageLoop from "./HorizontalmageLoop";
import ImageGallery from "./ImageGallery";
import Tokenomics from "./Tokenomics";


const MainContent = () => {
  const scrollToHowToBuy = () => {
    document
      .getElementById("how-to-buy")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main className="main-content">
      </main>
   
      <ImageGallery />
      <div className="filler"></div>
      <Tokenomics />
\      

      {/* <TimelineNew /> */}
      {/* <iframe 
          src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1TL0Nj2dAGFl33J-VPOCaSr5QZ5l6gMF1EKalmPyhMRA&font=Default&lang=en&initial_zoom=2&height=650'
          width='50%' 
          height='650' 
          webkitallowfullscreen="true" 
          mozallowfullscreen="true" 
          allowFullScreen 
          frameBorder='0'
        ></iframe> */}
      {/* <Tokenomics /> */}
      {/* <HowToBuy /> */}
    </div>
  );
};

export default MainContent;
