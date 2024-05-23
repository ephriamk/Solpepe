import React from 'react';
import '../../src/Tokenomics.css';
import { Link } from 'react-router-dom';

const Tokenomics = () => {
    return (
        <div id="tokenomics" className="tokenomics">
            <div className="tokenomics-content">
                <div className='road'>
                    <h1>Roadmap</h1>
                </div>
                
                <div className="gallery">
                    <div className="gallery-item one">
                        <h3 className='one'>Pumpfun </h3>
                        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">

                            <img src="/Pump pill graphic 2.jpg" alt="Tokenomics 1" className="gallery-image" />
                        </a>
                        
                    </div>
                    <div className="gallery-item raydium">
                        <h3>Raydium</h3>
                        <a href="https://raydium.io/swap/" target="_blank" rel="noopener noreferrer">
                            <img src="/Raydium graphic 2.jpg" alt="Tokenomics 2" className="gallery-image" />
                        </a>
                    </div>
                    <div className="gallery-item solana">
                        <h3>1M Market Cap</h3>
                        <a href="https://example.com/marketcap" target="_blank" rel="noopener noreferrer">
                            <img src="/King.jpg" alt="Tokenomics 3" className="gallery-image" />
                        </a>
                    </div>
                    <div className="gallery-item new-item">
                        <h3>1 Billion Market Cap!!!!</h3>
                        <a href="https://example.com/newitem" target="_blank" rel="noopener noreferrer">
                            <img src="Pfp_hires 2.jpg" alt="Tokenomics 4" className="gallery-image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
