import React, { useState } from 'react';
import Playlist from './Playlist';
import Player from './Player';
import './App.css';

const App = () => {
  const videos = [
    {
      id: 1,
      thumbnail: 'https://example.com/video1-thumbnail.jpg',
      title: 'Introduction to React',
      duration: '10:32',
      videoUrl: 'https://www.youtube.com/watch?v=MzfnQ9f6lqI',
      description: 'This video provides an introduction to React and covers the basics of React components and props.',
    },
    {
      id: 2,
      thumbnail: 'https://example.com/video2-thumbnail.jpg',
      title: 'Components and Props',
      duration: '12:45',
      videoUrl: 'https://www.youtube.com/watch?v=OFyrvLVqOBM',
      description: 'In this video, we dive deeper into React components and explore the concept of props.',
    },
    // Add more video objects as needed
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="course-title">React Node.js Express MongoDB: The MERN Fullstack Guide</h1>
        <div className="video-player">
          <Player videoUrl={selectedVideo?.videoUrl} />
          <div className="video-description">
            <h2 className="video-description-heading">Video Description</h2>
            <p className="video-description-text">{selectedVideo?.description}</p>
          </div>
        </div>
        <div className="playlist-container">
          <Playlist videos={videos} onSelectVideo={handleSelectVideo} selectedVideo={selectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
