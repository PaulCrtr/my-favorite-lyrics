import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  // Songs grouped by artists
  const list = JSON.parse(window.localStorage.getItem("myLyrics")).reduce(
    (element, { artist, id, title, picture, lyrics }) => {
      (element[artist] = element[artist] || []).push({
        id,
        title,
        picture,
        lyrics,
      });
      return element;
    },
    {}
  );

  return (
    <div>
      <Link to="/">Home</Link>
      {Object.keys(list).map((key, i) => (
        <div key={i}>
          <h2>{key}</h2>
          {list[key].map((datas) => (
            <Link to={{ pathname: "/lyrics", state: { datas } }} key={datas.id}>
              <h3>{datas.title}</h3>
              <img src={datas.picture} alt={datas.artist} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
