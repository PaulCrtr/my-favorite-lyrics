import React, { useState, useEffect } from "react";
import RequestForm from "./RequestForm";

const Home = () => {
  const [item, setItem] = useState();

  return (
    <div>
      <RequestForm setItem={setItem} />
      <p>{item && item.lyrics}</p>
    </div>
  );
};

export default Home;
