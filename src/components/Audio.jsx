// src/AudioPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import './Audio.css';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.1); // Set initial volume to a low value

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.volume = volume;
    audioElement.play()
      .then(() => setIsPlaying(true))
      .catch(error => console.log('Playback prevented:', error));
  }, []);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} autoPlay>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
