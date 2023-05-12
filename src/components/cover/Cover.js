import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Caio Freitas</h1>
      <p>Desenvolvedor | Pro Player | Cachaceiro | Sarro Muito </p>
    </div>
  );
};

export default Cover;
