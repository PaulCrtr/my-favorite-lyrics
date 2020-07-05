const initStorage = () => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics")) || [];
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

export default initStorage;
