import React from 'react';
import './GalleryComponent.css';

const GalleryComponent = () => {
    return (
        <div className="gallery-container">
            <div className="gallery">
                <img src="/Sticker 1.png" alt="Sticker 1" className="gallery-image" />
                <img src="/Sticker 2.png" alt="Sticker 2" className="gallery-image" />
                <img src="/Sticker 3.png" alt="Sticker 3" className="gallery-image" />
                <img src="/Sticker 4.png" alt="Sticker 4" className="gallery-image" />
                <img src="/Sticker 5.png" alt="Sticker 5" className="gallery-image" />
                {/* Duplicate images for seamless loop */}
                <img src="/Sticker 1.png" alt="Sticker 1" className="gallery-image" />
                <img src="/Sticker 2.png" alt="Sticker 2" className="gallery-image" />
                <img src="/Sticker 3.png" alt="Sticker 3" className="gallery-image" />
                <img src="/Sticker 4.png" alt="Sticker 4" className="gallery-image" />
                <img src="/Sticker 5.png" alt="Sticker 5" className="gallery-image" />
            </div>
        </div>
    );
}

export default GalleryComponent;
