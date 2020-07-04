import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  const list = JSON.parse(window.localStorage.getItem("myLyrics"));

  return (
    <div>
      <Link to="/">Home</Link>
      {list.map((item) => (
        <div key={item.id}>
          <Link to={{ pathname: "/lyrics", state: { item } }}>
            <h2>{item.artist}</h2>
            <h3>{item.title}</h3>
            <img src={item.picture} alt={item.artist} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default List;
