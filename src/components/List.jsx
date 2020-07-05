import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteItem from "./deleteItem";
import groupList from "./groupList";

const List = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(groupList());

  useEffect(() => {
    setList(groupList());
  }, [isClicked]);

  return (
    <div>
      <Link to="/">Home</Link>
      {Object.keys(list).map((key, i) => (
        <div key={i}>
          <h2>{key}</h2>
          {list[key].map((datas) => (
            <div key={datas.id}>
              <Link to={{ pathname: "/lyrics", state: { datas } }}>
                <h3>{datas.title}</h3>
                <img src={datas.picture} alt={datas.artist} />
              </Link>
              <button
                onClick={() => {
                  setIsClicked(!isClicked);
                  deleteItem(datas.id);
                }}
              >
                Remove lyrics
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
