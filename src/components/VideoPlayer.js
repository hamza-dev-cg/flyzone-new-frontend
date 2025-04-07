import React, { useRef } from "react";
import FlyZoneAboutUs from "../assets/videos/flyzone-about-us.mp4";
const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <div className="text-center mt-3">
      <video ref={videoRef} controls className="video-player">
        <source src={FlyZoneAboutUs} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
