import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteItem, groupList } from "./localstorageFunctions";
import trash from "../img/trashdelete.png";
import "../style/list.css";

const List = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(groupList());

  useEffect(() => {
    setList(groupList());
  }, [isClicked]);

  return (
    <div className="list">
      <div className="home-link-container">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      {Object.keys(list).map((key, i) => (
        <div key={i} className="artist">
          <div className="artist-header">
            <h2>{key}</h2>
            <img src={list[key][0].picture} alt={key} />
          </div>
          {list[key].map((datas) => (
            <div key={datas.id} className="track">
              <Link to={{ pathname: "/lyrics", state: { datas } }}>
                <h3>{datas.title}</h3>
              </Link>
              <img
                src={trash}
                alt="delete"
                onClick={() => {
                  setIsClicked(!isClicked);
                  deleteItem(datas.id);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
