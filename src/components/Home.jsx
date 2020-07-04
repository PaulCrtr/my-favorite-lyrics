import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestForm from "./RequestForm";
import addItem from "./addItem";

const Home = () => {
  const [item, setItem] = useState();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Check if the item is already added
  useEffect(() => {
    if (item) {
      const searchItem = JSON.parse(
        window.localStorage.getItem("myLyrics")
      ).find((element) => element.id === item.id);
      if (searchItem) {
        setAlreadyAdded(true);
      } else {
        setAlreadyAdded(false);
      }
    }
  }, [item, isClicked]);

  return (
    <div>
      <Link to="./list">My list</Link>
      <RequestForm setItem={setItem} />
      {item && (
        <div>
          {alreadyAdded ? (
            <button disabled> Already added !</button>
          ) : (
            <button
              onClick={() => {
                setIsClicked(!isClicked);
                addItem(item);
              }}
            >
              Add to my list
            </button>
          )}
          <p>{item.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
