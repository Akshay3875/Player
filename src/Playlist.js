import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ videos, onSelectVideo, selectedVideo }) => {
  return (
    <div className="playlist">
      <h2 className="playlist-heading">Playlist</h2>
      <ul className="playlist-list">
        {videos.map((video) => (
          <li
            key={video.id}
            className={`playlist-item ${video === selectedVideo ? 'selected' : ''}`}
            onClick={() => onSelectVideo(video)}
          >
            <div className="playlist-item-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className="playlist-item-info">
              <h3 className="playlist-item-title">{video.title}</h3>
              <p className="playlist-item-duration">{video.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Playlist.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      videoUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectVideo: PropTypes.func.isRequired,
  selectedVideo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Playlist;
