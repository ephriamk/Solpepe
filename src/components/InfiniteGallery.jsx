import React, { useEffect, useRef } from 'react';
import './InfiniteGallery.css';

const images = [
  './Sticker 1.png',
  './Sticker 2.png',
  './Sticker 3.png',
  './Sticker 4.png',
  './Sticker .png',
];

const InfiniteGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    let start = Date.now();
    let requestId;

    const animate = () => {
      const timePassed = Date.now() - start;
      gallery.scrollLeft = (timePassed / 5) % (gallery.scrollWidth / 2);

      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery-content">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
        {images.map((src, index) => (
          <img key={index + images.length} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;
