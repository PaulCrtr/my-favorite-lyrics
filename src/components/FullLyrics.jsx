import React from "react";
import { Link } from "react-router-dom";

const FullLyrics = (props) => {
  const { item } = props.location.state;

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/list">My list</Link>
      <h2>{item.artist}</h2>
      <h2>{item.title}</h2>
      <iframe
        title={item.title}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${item.id}&app_id=1`}
        width="700"
        height="100"
      />
      <p>{item.lyrics}</p>
    </div>
  );
};

export default FullLyrics;
