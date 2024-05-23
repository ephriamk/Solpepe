import React from 'react';
import './ImageGallery.css'; // Make sure to create this CSS file and add the styles there

const ImageGallery = () => {
  // Function to play the audio
  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    audioElement.play();
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <img
          src="./Sticker 1.png"
          className="image-1"
          alt="Image 1"
          onClick={() => playAudio('audioPlayer1')}
        />
        <img
          src="./Sticker 2.png"
          className="image-2"
          alt="Image 2"
          onClick={() => playAudio('audioPlayer2')}
        />
        <img
          src="./Sticker 3.png"
          className="image-3"
          alt="Image 3"
          onClick={() => playAudio('audioPlayer3')}
        />
        <img
          src="./Sticker 4.png"
          className="image-4"
          alt="Image 4"
          onClick={() => playAudio('audioPlayer4')}
        />
        <img
          src="./Sticker 5.png"
          className="image-5"
          alt="Image 5"
          onClick={() => playAudio('audioPlayer5')}
        />
        {/* Repeat images to ensure seamless scrolling */}
        <img
          src="./Sticker 1.png"
          className="image-1"
          alt="Image 1"
          onClick={() => playAudio('audioPlayer1')}
        />
        <img
          src="./Sticker 2.png"
          className="image-2"
          alt="Image 2"
          onClick={() => playAudio('audioPlayer2')}
        />
        <img
          src="./Sticker 3.png"
          className="image-3"
          alt="Image 3"
          onClick={() => playAudio('audioPlayer3')}
        />
        <img
          src="./Sticker 4.png"
          className="image-4"
          alt="Image 4"
          onClick={() => playAudio('audioPlayer4')}
        />
        <img
          src="./Sticker 5.png"
          className="image-5"
          alt="Image 5"
          onClick={() => playAudio('audioPlayer5')}
        />
      </div>
      <audio id="audioPlayer1" src="./believeIt.mp3" />
      <audio id="audioPlayer2" src="./sound2.mp3" />
      <audio id="audioPlayer3" src="./goku.mp3" />
      <audio id="audioPlayer4" src="./luffy.mp3" />
      <audio id="audioPlayer5" src="./sound5.mp3" />
    </div>
  );
};

export default ImageGallery;
