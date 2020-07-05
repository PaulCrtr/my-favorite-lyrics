import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const RequestForm = ({ setItem, item, setIsLoading }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTime, setTypingTime] = useState(0);

  // Set a timeout during writing so that the API is not overloaded
  useEffect(() => {
    setIsTyping(true);
    if (typingTime) {
      clearTimeout(typingTime);
    }
    setTypingTime(
      setTimeout(() => {
        setIsTyping(false);
      }, 300)
    );
  }, [search]);

  // Get search suggests and related datas
  useEffect(() => {
    if (!isTyping && search)
      axios
        .get(`https://api.lyrics.ovh/suggest/${search}`)
        .then((res) => {
          let tempSearch = [];
          for (let i = 0; i < 3; i++) {
            const datas = res.data.data[i];
            if (datas) {
              tempSearch.push({
                id: datas.id,
                artist: datas.artist.name,
                title: datas.title,
                picture: datas.artist.picture,
              });
            }
          }
          setResults(tempSearch);
        })
        .catch(() => setResults([]));
  }, [isTyping]);

  // Get lyrics and pass them into the item object
  const getlyrics = (i) => {
    setIsLoading(true);
    axios
      .get(`https://api.lyrics.ovh/v1/${results[i].artist}/${results[i].title}`)
      .then((res) => res.data.lyrics)
      .then((res) => {
        setIsLoading(false);
        setItem({ ...results[i], lyrics: res });
      })
      .catch(() => {
        setIsLoading(false);
        setItem("notFound");
      });
  };

  return (
    <div className="request-form">
      {item && item.lyrics && (
        <Redirect
          to={{
            pathname: "/lyrics",
            state: { datas: item },
          }}
        />
      )}
      <div className="input-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      <ul className="suggests">
        {search &&
          results.map((element, i) => (
            <li
              key={element.id}
              id={i}
              onClick={(e) => {
                getlyrics(e.currentTarget.id);
              }}
            >
              <p>{`${element.artist} - ${element.title}`}</p>
              <img src={element.picture} alt={element.artist} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RequestForm;
