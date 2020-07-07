import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestForm from "./RequestForm";
import { initStorage } from "./localstorageFunctions";
import "../style/home.css";

const Home = () => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    initStorage();
  }, []);

  return (
    <div className="home">
      <div className="home-nav">
        <h1>Lyrics</h1>
        <Link to="./list">My list</Link>
      </div>
      {item === "notFound" && !isLoading && (
        <h2 className="not-found">Lyrics not found !</h2>
      )}
      {isLoading && <div className="lds-dual-ring" />}
      <RequestForm setItem={setItem} item={item} setIsLoading={setIsLoading} />
    </div>
  );
};

export default Home;
