import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
      <div className="VideoItem" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div className="VideoItem-title" >
          <b>{video.snippet.title}</b>
        </div>
      </div>
  );
}

export default VideoItem;
