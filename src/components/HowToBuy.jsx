import React, { useState } from 'react';
import '../../src/HowToBuy.css';

const HowToBuy = () => {
    const [steps, setSteps] = useState([false, false, false, false]);

    const handleCheckboxChange = (index) => {
        const newSteps = [...steps];
        newSteps[index] = !newSteps[index];
        setSteps(newSteps);
    };

    const allStepsCompleted = steps.every(step => step);

    return (
        <div id="how-to-buy" className="how-to-buy">
            <h1>How to Buy</h1>
            <div className="step">
                <h2>
                    <input
                        type="checkbox"
                        checked={steps[0]}
                        onChange={() => handleCheckboxChange(0)}
                    />
                    <label>1. Create a Wallet</label>
                </h2>
                <p>Download a wallet app like Phantom or Sollet and create a new wallet.</p>
            </div>
            <div className="step">
                <h2>
                    <input
                        type="checkbox"
                        checked={steps[1]}
                        onChange={() => handleCheckboxChange(1)}
                    />
                    <label>2. Get Some SOL</label>
                </h2>
                <p>Purchase SOL from an exchange like Binance or Coinbase and transfer it to your wallet.</p>
            </div>
            <div className="step">
                <h2>
                    <input
                        type="checkbox"
                        checked={steps[2]}
                        onChange={() => handleCheckboxChange(2)}
                    />
                    <label>3. Go to Raydium</label>
                </h2>
                <p>Visit the Raydium website and connect your wallet.</p>
            </div>
            <div className="step">
                <h2>
                    <input
                        type="checkbox"
                        checked={steps[3]}
                        onChange={() => handleCheckboxChange(3)}
                    />
                    <label>4. Swap SOL</label>
                </h2>
                <p>Swap your SOL for the desired token on Raydium.</p>
            </div>
            {allStepsCompleted && (
                <img
                    src="/path-to-your-cartoon-image.png"
                    alt="All steps completed"
                    className="complete-image"
                />
            )}
        </div>
    );
};

export default HowToBuy;
