import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestForm from "./RequestForm";
import addItem from "./addItem";

const Home = () => {
  const [item, setItem] = useState();

  return (
    <div>
      <Link to="./list">My list</Link>
      <RequestForm setItem={setItem} />
      {item && (
        <div>
          <button onClick={() => addItem(item)}>Add to my list</button>
          <p>{item.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
