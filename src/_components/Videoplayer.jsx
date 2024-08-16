import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative pb-[56.25%] h-0  ">
      <iframe
        src="https://www.youtube.com/embed/tVzUXW6siu0?si=LfH6yqEfVR9SjLvY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 lg:w-[500px] w-full  h-[300px]   "
      />
    </div>
  );
};

export default VideoPlayer;
