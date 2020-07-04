import React from "react";

const FullLyrics = (props) => {
  const { item } = props.location.state;

  return (
    <div>
      <h2>{item.artist}</h2>
      <h2>{item.title}</h2>
      <p>{item.lyrics}</p>
    </div>
  );
};

export default FullLyrics;
