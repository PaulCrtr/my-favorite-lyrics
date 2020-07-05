import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestForm from "./RequestForm";
import initStorage from "./initStorage";
import "../style/home.css";

const Home = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    initStorage();
  }, []);

  return (
    <div className="home">
      <div className="home-nav">
        <h1>Lyrics</h1>
        <Link to="./list">My list</Link>
      </div>
      {item === "notFound" && <h2 className="not-found">Lyrics not found !</h2>}
      <RequestForm setItem={setItem} item={item} />
    </div>
  );
};

export default Home;
