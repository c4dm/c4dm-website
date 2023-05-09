import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
  };

  const iFrameStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="embedVideo-container" style={containerStyle}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={iFrameStyle}
      />
    </div>
  );
};
export default Video;
