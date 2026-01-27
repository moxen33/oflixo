import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "/assets/images/player/demo_videos.mp4";
import img from "/assets/images/player/player-poster.webp";

const VideoPlayer = () => {
  return (
      <>
            <div className="back-btn">
                <Link className="btn btn-link text-white text-decoration-none p-0" to="/videos-detail">
                    <i className="ph ph-x"></i>
                </Link>
            </div>
            <div className="video-container">
                <video
                    id="my-video"
                    className="video-js vjs-big-play-centered"
                    controls
                    preload="auto"
                    width="960"
                    height="540"
                    poster={img}
                    data-setup='{}'>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
      </>
  );
};

export default VideoPlayer;
