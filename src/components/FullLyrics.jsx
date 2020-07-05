import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addItem from "./addItem";
import deleteItem from "./deleteItem";
import iconAdd from "../img/icon-add.png";
import trash from "../img/trashdelete.png";
import "../style/fullLyrics.css";

const FullLyrics = (props) => {
  const { datas } = props.location.state;
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Check if the item is already added
  useEffect(() => {
    if (datas) {
      const searchItem = JSON.parse(
        window.localStorage.getItem("myLyrics")
      ).find((element) => element.id === datas.id);
      if (searchItem) {
        setAlreadyAdded(true);
      } else {
        setAlreadyAdded(false);
      }
    }
  }, [datas, isClicked]);

  return (
    <>
      {datas && datas && (
        <div className="page-lyrics">
          <div className="lyrics-header">
            <Link to="/">Home</Link>
            <Link to="/list">My list</Link>
            <div>
              {alreadyAdded ? (
                <img
                  src={trash}
                  alt="trash"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    deleteItem(datas.id);
                  }}
                />
              ) : (
                <img
                  src={iconAdd}
                  alt="add lyrics"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    addItem(datas);
                  }}
                />
              )}
            </div>
          </div>
          <iframe
            title={datas.title}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${datas.id}&app_id=1`}
            width="300"
            height="90"
          />

          <h2>{`${datas.artist} - ${datas.title}`}</h2>
          <p className="lyrics">{datas.lyrics}</p>
        </div>
      )}
    </>
  );
};

export default FullLyrics;
