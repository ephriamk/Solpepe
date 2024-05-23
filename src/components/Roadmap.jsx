import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="timeline">
        <h1>ROADMAP</h1>
      <div className="container left">
        <div className="content">
          <img src="./Pump pill graphic 2.jpg" alt="Event 2022" className="event-image" />
          <h2>Pump Fun</h2>
          <p>Kamehameha through Pump Fun</p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <img src="./Raydium graphic 2.jpg" alt="Event 2023" className="event-image" />
          <h2>Raydium</h2>
          <p>Launched beta version and gathered user feedback.</p>
          
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <img src="./King.jpg" alt="Event 2024" className="event-image" />
          <h2>1,000,000 Market Cap</h2>
          <p>Official release and feature expansion.</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
