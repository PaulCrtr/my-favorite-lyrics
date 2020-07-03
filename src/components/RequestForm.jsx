import React, { useState } from "react";
import axios from "axios";

const RequestForm = ({ setResult }) => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const getlyrics = () => {
    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((res) => res.data.lyrics)
      .then((res) => setResult({ artist, title, lyrics: res }))
      .catch(setResult());
  };

  return (
    <>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <button onClick={() => getlyrics()}>Search lyrics </button>
    </>
  );
};

export default RequestForm;
