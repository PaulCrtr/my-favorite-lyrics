const initStorage = () => {
  window.localStorage.setItem("myLyrics", JSON.stringify([]));
};

export default initStorage;
