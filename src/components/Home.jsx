import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestForm from "./RequestForm";

const Home = () => {
  const [item, setItem] = useState();

  return (
    <div>
      <Link to="./list">My list</Link>
      <RequestForm setItem={setItem} item={item} />
      {item === "notFound" && <p>Lyrics not found !</p>}
    </div>
  );
};

export default Home;
