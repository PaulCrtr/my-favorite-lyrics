import React, { useState } from "react";
import RequestForm from "./RequestForm";

const Home = () => {
  const [result, setResult] = useState();

  return (
    <div>
      <RequestForm setResult={setResult} />
      <p>{result && result.lyrics}</p>
    </div>
  );
};

export default Home;
