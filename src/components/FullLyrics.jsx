import React from "react";
import { Link } from "react-router-dom";

const FullLyrics = (props) => {
  const { datas } = props.location.state;

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/list">My list</Link>
      <h2>{datas.artist}</h2>
      <h2>{datas.title}</h2>
      <iframe
        title={datas.title}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${datas.id}&app_id=1`}
        width="700"
        height="100"
      />
      <p>{datas.lyrics}</p>
    </div>
  );
};

export default FullLyrics;
