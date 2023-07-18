import ReactPlayer from 'react-player';

const Player = ({ videoUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        playing
      />
    </div>
  );
};

export default Player;
