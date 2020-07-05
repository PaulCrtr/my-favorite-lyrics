import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addItem from "./addItem";
import deleteItem from "./deleteItem";

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
      {datas && (
        <div>
          {alreadyAdded ? (
            <button
              onClick={() => {
                setIsClicked(!isClicked);
                deleteItem(datas.id);
              }}
            >
              Remove lyrics
            </button>
          ) : (
            <button
              onClick={() => {
                setIsClicked(!isClicked);
                addItem(datas);
              }}
            >
              Add to my list
            </button>
          )}
          <p>{datas.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default FullLyrics;
